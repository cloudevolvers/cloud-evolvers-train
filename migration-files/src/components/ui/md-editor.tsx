'use client';

import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bold, Italic, List, ListOrdered, Image, Link, Quote, Code, Heading1, Heading2, Heading3 } from 'lucide-react';
import { toast } from 'sonner';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export function Editor({
  value,
  onChange,
  className,
  placeholder = 'Write your content here...'
}: EditorProps) {
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Function to insert markdown syntax
  const insertMarkdown = (before: string, after = '') => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // Set cursor position after the operation
    const newCursorPos = selectedText.length > 0 
      ? start + before.length + selectedText.length + after.length
      : start + before.length;
      
    // We need to wait until the next render for this to work properly
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const handleBold = () => insertMarkdown('**', '**');
  const handleItalic = () => insertMarkdown('*', '*');
  const handleLink = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = value.substring(start, end);
      
      // If text is selected, use it as link text, otherwise use generic text
      const linkText = selectedText.length > 0 ? selectedText : 'link text';
      insertMarkdown(`[${linkText}](`, ')');
    }
  };

  const handleImage = async () => {
    try {
      // Try to read an image URL from clipboard
      const clipboardItems = await navigator.clipboard.read();
      let imageBlob: Blob | null = null;
      
      // Look for image in clipboard
      for (const clipboardItem of clipboardItems) {
        for (const type of clipboardItem.types) {
          if (type.startsWith('image/')) {
            imageBlob = await clipboardItem.getType(type);
            break;
          }
        }
        if (imageBlob) break;
      }
      
      if (imageBlob) {
        // If we have an image, we could upload it here
        // For now, we'll just insert a placeholder
        insertMarkdown('![Image Description](', ')');
        toast.info('Image tag inserted. Replace with actual URL after upload.');
      } else {
        // Otherwise, just insert the markdown syntax
        insertMarkdown('![Image Description](', ')');
      }
    } catch (error) {
      // Clipboard API might not be available or have permission
      insertMarkdown('![Image Description](', ')');
    }
  };

  const handleHeading = (level: number) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    
    // Find the start of the current line
    let lineStart = start;
    while (lineStart > 0 && value.charAt(lineStart - 1) !== '\n') {
      lineStart--;
    }
    
    // Check if there's already a heading at the current line
    const currentLine = value.substring(lineStart, value.indexOf('\n', lineStart) >= 0 ? value.indexOf('\n', lineStart) : value.length);
    const headingMatch = currentLine.match(/^(#{1,6})\s/);
    
    let newText;
    if (headingMatch) {
      // Replace existing heading
      const existingPrefix = headingMatch[0];
      const newPrefix = '#'.repeat(level) + ' ';
      newText = value.substring(0, lineStart) + newPrefix + currentLine.substring(existingPrefix.length) + value.substring(lineStart + currentLine.length);
    } else {
      // Add new heading
      const newPrefix = '#'.repeat(level) + ' ';
      newText = value.substring(0, lineStart) + newPrefix + value.substring(lineStart);
    }
    
    onChange(newText);
    
    // Set cursor position at the end of the heading
    setTimeout(() => {
      textarea.focus();
      const newPos = lineStart + level + 1; // +1 for the space
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  const handleList = (ordered = false) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    // Get selected text
    const selectedText = value.substring(start, end);
    
    // If there's selected text, convert each line to a list item
    if (selectedText) {
      const lines = selectedText.split('\n');
      const newLines = lines.map((line, index) => {
        // Skip empty lines
        if (!line.trim()) return '';
        return ordered ? `${index + 1}. ${line}` : `- ${line}`;
      });
      
      const newText = value.substring(0, start) + newLines.join('\n') + value.substring(end);
      onChange(newText);
    } else {
      // Just insert a single list item
      const prefix = ordered ? '1. ' : '- ';
      insertMarkdown(prefix);
    }
  };

  const handleBlockquote = () => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    
    // Get selected text
    const selectedText = value.substring(start, end);
    
    // If there's selected text, convert each line to a blockquote
    if (selectedText) {
      const lines = selectedText.split('\n');
      const newLines = lines.map(line => `> ${line}`);
      
      const newText = value.substring(0, start) + newLines.join('\n') + value.substring(end);
      onChange(newText);
    } else {
      // Just insert a single blockquote
      insertMarkdown('> ');
    }
  };

  const handleCode = () => {
    // Check if multiple lines are selected
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    if (selectedText.includes('\n')) {
      // For multiple lines, use code block
      insertMarkdown('```\n', '\n```');
    } else {
      // For single line, use inline code
      insertMarkdown('`', '`');
    }
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Detect key combinations with Ctrl/Cmd key
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
      switch (e.key) {
        case 'b':
          e.preventDefault();
          handleBold();
          break;
        case 'i':
          e.preventDefault();
          handleItalic();
          break;
        case 'k':
          e.preventDefault();
          handleLink();
          break;
        // Add more shortcuts as needed
      }
    }
  };

  // Handle paste events to capture images
  const handlePaste = async (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault();
        toast.info('Image pasting is supported but upload functionality needs to be implemented');
        insertMarkdown('![Pasted Image](', ')');
        break;
      }
    }
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="bg-muted p-2 border-b flex flex-wrap gap-1">
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => handleHeading(1)}
          title="Heading 1 (Ctrl+H)"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => handleHeading(2)}
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => handleHeading(3)}
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        
        <span className="inline-block w-px h-8 bg-muted-foreground/20 mx-1"></span>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleBold}
          title="Bold (Ctrl+B)"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleItalic}
          title="Italic (Ctrl+I)"
        >
          <Italic className="h-4 w-4" />
        </Button>
        
        <span className="inline-block w-px h-8 bg-muted-foreground/20 mx-1"></span>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => handleList(false)}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={() => handleList(true)}
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleBlockquote}
          title="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleCode}
          title="Code"
        >
          <Code className="h-4 w-4" />
        </Button>
        
        <span className="inline-block w-px h-8 bg-muted-foreground/20 mx-1"></span>
        
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleLink}
          title="Link (Ctrl+K)"
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleImage}
          title="Image"
        >
          <Image className="h-4 w-4" />
        </Button>
      </div>
      
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        className="flex-1 min-h-[400px] font-mono text-sm resize-none rounded-t-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0"
        style={{ height: '100%' }}
      />
    </div>
  );
}
