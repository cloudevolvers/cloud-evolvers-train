/**
 * Simple markdown to HTML converter with beautiful typography styling
 */
export function markdownToHtml(markdown: string): string {
  if (!markdown) return '';

  return markdown
    // Handle headers (must come before other formatting)
    .replace(/### (.*?)(\n|$)/g, '<h3 class="text-lg font-medium mb-2 mt-4 text-gray-800 dark:text-gray-200 border-l-4 border-blue-500 pl-3 bg-blue-50/50 dark:bg-blue-950/30 py-1.5 rounded-r-lg">$1</h3>')
    .replace(/## (.*?)(\n|$)/g, '<h2 class="text-xl font-semibold mb-3 mt-5 text-gray-800 dark:text-gray-200 border-l-4 border-blue-600 pl-3 bg-blue-50/70 dark:bg-blue-950/40 py-2 rounded-r-lg">$1</h2>')
    .replace(/# (.*?)(\n|$)/g, '<h1 class="text-2xl font-bold mb-4 mt-1 text-gray-900 dark:text-gray-100 border-l-4 border-blue-700 pl-3 bg-blue-50 dark:bg-blue-950/50 py-2.5 rounded-r-lg">$1</h1>')
    
    // Handle blockquotes
    .replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-3 italic text-gray-600 dark:text-gray-400 bg-blue-50/50 dark:bg-blue-950/20 rounded-r-lg font-medium">$1</blockquote>')
    
    // Handle code blocks (must come before inline code)
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg overflow-x-auto mb-3 border border-gray-200 dark:border-gray-700 shadow-sm"><code class="text-sm font-mono text-gray-800 dark:text-gray-200">$1</code></pre>')
    
    // Handle inline code
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700">$1</code>')
    
    // Handle bold and italic (must come before lists to avoid conflicts)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-gray-100">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-600 dark:text-gray-400">$1</em>')
    
    // Handle unordered lists
    .replace(/^- (.*?)$/gm, '<li class="text-gray-700 dark:text-gray-300 mb-1 flex items-start"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span><span class="leading-normal">$1</span></li>')
    
    // Handle ordered lists
    .replace(/^(\d+)\. (.*?)$/gm, '<li class="text-gray-700 dark:text-gray-300 mb-1 flex items-start"><span class="w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center mr-2 flex-shrink-0 font-medium mt-0.5">$1</span><span class="leading-normal">$2</span></li>')
    
    // Handle links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline font-medium transition-colors duration-200">$1</a>')
    
    // Handle line breaks and paragraphs
    .replace(/\n\n+/g, '</p><p class="mb-3 text-base leading-normal text-gray-700 dark:text-gray-300">')
    .replace(/\n/g, '<br />')
    .replace(/^/, '<p class="mb-3 text-base leading-normal text-gray-700 dark:text-gray-300">')
    .replace(/$/, '</p>')
    
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    
    // Wrap consecutive list items in ul/ol tags
    .replace(/(<li class="[^"]*"[^>]*>.*?<\/span><\/li>\s*)+/g, (match) => {
      // Check if it's an ordered list (contains numbered spans)
      if (match.includes('rounded-full flex items-center justify-center')) {
        return `<ol class="mb-3 space-y-1">${match}</ol>`;
      } else {
        return `<ul class="mb-3 space-y-1">${match}</ul>`;
      }
    });
}

/**
 * Enhanced prose styling classes for markdown content
 */
export const proseClasses = [
  // Base prose styling
  'prose', 'prose-lg', 'max-w-none',
  
  // Paragraph styling
  '[&>p]:mb-3', '[&>p]:text-base', '[&>p]:leading-normal', 
  '[&>p]:text-gray-700', 'dark:[&>p]:text-gray-300',
  
  // Header styling
  '[&>h1]:text-2xl', '[&>h1]:font-bold', '[&>h1]:mb-4', '[&>h1]:mt-1',
  '[&>h1]:text-gray-900', 'dark:[&>h1]:text-gray-100',
  '[&>h2]:text-xl', '[&>h2]:font-semibold', '[&>h2]:mb-3', '[&>h2]:mt-5',
  '[&>h2]:text-gray-800', 'dark:[&>h2]:text-gray-200',
  '[&>h3]:text-lg', '[&>h3]:font-medium', '[&>h3]:mb-2', '[&>h3]:mt-4',
  '[&>h3]:text-gray-800', 'dark:[&>h3]:text-gray-200',
  
  // List styling
  '[&>ul]:mb-3', '[&>ul]:space-y-1',
  '[&>ol]:mb-3', '[&>ol]:space-y-1',
  '[&>li]:text-gray-700', 'dark:[&>li]:text-gray-300',
  
  // Blockquote styling
  '[&>blockquote]:border-l-4', '[&>blockquote]:border-blue-500', '[&>blockquote]:pl-4',
  '[&>blockquote]:py-2', '[&>blockquote]:my-3', '[&>blockquote]:italic',
  '[&>blockquote]:text-gray-600', 'dark:[&>blockquote]:text-gray-400',
  '[&>blockquote]:bg-blue-50/50', 'dark:[&>blockquote]:bg-blue-950/20',
  '[&>blockquote]:rounded-r-lg', '[&>blockquote]:font-medium',
  
  // Code styling
  '[&>code]:bg-gray-100', 'dark:[&>code]:bg-gray-800',
  '[&>code]:px-1.5', '[&>code]:py-0.5', '[&>code]:rounded',
  '[&>code]:text-sm', '[&>code]:font-mono',
  '[&>code]:text-blue-600', 'dark:[&>code]:text-blue-400',
  '[&>code]:border', '[&>code]:border-gray-200', 'dark:[&>code]:border-gray-700',
  
  // Pre styling
  '[&>pre]:bg-gray-100', 'dark:[&>pre]:bg-gray-800',
  '[&>pre]:p-3', '[&>pre]:rounded-lg', '[&>pre]:overflow-x-auto',
  '[&>pre]:mb-3', '[&>pre]:border', '[&>pre]:border-gray-200',
  'dark:[&>pre]:border-gray-700', '[&>pre]:shadow-sm',
  
  // Text emphasis styling
  '[&>strong]:font-semibold', '[&>strong]:text-gray-900', 'dark:[&>strong]:text-gray-100',
  '[&>em]:italic', '[&>em]:text-gray-600', 'dark:[&>em]:text-gray-400',
  
  // Link styling
  '[&>a]:text-blue-600', 'dark:[&>a]:text-blue-400',
  '[&>a]:hover:text-blue-800', 'dark:[&>a]:hover:text-blue-300',
  '[&>a]:underline', '[&>a]:font-medium', '[&>a]:transition-colors', '[&>a]:duration-200'
].join(' ');
