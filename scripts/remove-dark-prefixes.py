#!/usr/bin/env python3
"""
Script to remove dark: prefixes and light mode variants from Tailwind classes.
Since we're dark-mode-only, we keep the dark variants as the default.
"""

import re
import os
import sys
from pathlib import Path

def process_classname(class_str):
    """
    Process a className string to remove light variants and dark: prefixes.
    
    Examples:
        "bg-slate-50 dark:bg-slate-900" -> "bg-slate-900"
        "text-gray-700 dark:text-slate-300" -> "text-slate-300"
        "dark:bg-slate-800" -> "bg-slate-800"
    """
    # Split into individual classes
    classes = class_str.split()
    
    # Group classes by their base property (bg, text, border, etc.)
    property_groups = {}
    dark_variants = {}
    
    for cls in classes:
        if cls.startswith('dark:'):
            # This is a dark variant
            base_cls = cls[5:]  # Remove 'dark:' prefix
            # Extract property name (e.g., 'bg' from 'bg-slate-900')
            prop_match = re.match(r'^([a-z-]+?)(-|$)', base_cls)
            if prop_match:
                prop = prop_match.group(1)
                dark_variants[prop] = base_cls
        else:
            # This is a light/default variant
            prop_match = re.match(r'^([a-z-]+?)(-|$)', cls)
            if prop_match:
                prop = prop_match.group(1)
                if prop not in property_groups:
                    property_groups[prop] = []
                property_groups[prop].append(cls)
    
    # Build result: use dark variants, fall back to light if no dark variant exists
    result_classes = []
    
    # Add all dark variants
    for prop, dark_cls in dark_variants.items():
        result_classes.append(dark_cls)
        # Remove light variants for this property
        if prop in property_groups:
            del property_groups[prop]
    
    # Add remaining classes that don't have dark variants
    for prop, light_classes in property_groups.items():
        result_classes.extend(light_classes)
    
    return ' '.join(result_classes)

def process_file(filepath):
    """Process a single file to remove dark: prefixes."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        changes_made = 0
        
        # Pattern to match className="..." or className={`...`} or className={clsx(...)}
        # We'll focus on simple className strings first
        def replace_classname(match):
            nonlocal changes_made
            full_match = match.group(0)
            class_content = match.group(1)
            
            if 'dark:' in class_content:
                new_classes = process_classname(class_content)
                if new_classes != class_content:
                    changes_made += 1
                    return full_match.replace(class_content, new_classes)
            
            return full_match
        
        # Match className="..." patterns
        content = re.sub(
            r'className="([^"]*dark:[^"]*)"',
            replace_classname,
            content
        )
        
        # Match className={`...`} patterns
        content = re.sub(
            r'className=\{`([^`]*dark:[^`]*)`\}',
            replace_classname,
            content
        )
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ {filepath}: {changes_made} className strings updated")
            return True
        
        return False
    
    except Exception as e:
        print(f"✗ Error processing {filepath}: {e}")
        return False

def main():
    """Main function to process all TSX/JSX files."""
    src_dir = Path(__file__).parent.parent / 'src'
    
    if not src_dir.exists():
        print(f"Error: {src_dir} does not exist")
        sys.exit(1)
    
    # Find all TSX and JSX files
    files = list(src_dir.rglob('*.tsx')) + list(src_dir.rglob('*.jsx'))
    
    print(f"Found {len(files)} files to process\n")
    
    updated_files = 0
    for filepath in files:
        if process_file(filepath):
            updated_files += 1
    
    print(f"\n✓ Done! Updated {updated_files} files")

if __name__ == '__main__':
    main()
