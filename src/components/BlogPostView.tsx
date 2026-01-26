import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost, BlogSection as BlogSectionType } from "@/types/blog";
import { LocalizedBlogPost } from "@/data/blog-posts";
import { Calendar, Clock, ArrowLeft, User } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/use-translations";

interface BlogPostViewProps {
  post: BlogPost | LocalizedBlogPost;
  onBack: () => void;
}

export function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const { language } = useTranslations();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getText = (text: string | { en: string; nl: string }): string => {
    return typeof text === 'string' ? text : text.en; // Default to English if union type
  };

  const getList = (list: string[] | { en: string[]; nl: string[] } | undefined): string[] | undefined => {
    if (!list) return undefined;
    return Array.isArray(list) ? list : list.en;
  };

  const getHeaders = (headers: string[] | { en: string[]; nl: string[] }): string[] => {
    return Array.isArray(headers) ? headers : headers.en;
  };

  const getRows = (rows: string[][] | { en: string[][]; nl: string[][] }): string[][] => {
    return Array.isArray(rows) ? rows : rows.en;
  };

  const renderSection = (section: BlogSectionType, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-8"
    >
      <h2 className="text-white font-bold mb-4">{getText(section.title)}</h2>
      <p className="text-gray-300 mb-4 leading-relaxed text-lg">{getText(section.content)}</p>
      
      {section.subsections?.map((subsection, subIndex) => (
        <div key={subIndex} className="ml-4 mb-6">
          <h3 className="text-white font-semibold mb-3">{getText(subsection.title)}</h3>
          <p className="text-gray-300 mb-3 leading-relaxed">{getText(subsection.content)}</p>
          
          {subsection.list && (
            <ul className="list-disc list-inside space-y-2 ml-4">
              {getList(subsection.list)?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-300 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          )}
          
          {subsection.table && (
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse border border-slate-600">
                <thead>
                  <tr className="bg-slate-700/50">
                    {getHeaders(subsection.table.headers).map((header, headerIndex) => (
                      <th key={headerIndex} className="border border-slate-600 p-3 text-left font-semibold text-white">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getRows(subsection.table.rows).map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-slate-700/30">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-slate-600 p-3 text-gray-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="from-green-900/30 via-emerald-900/30 to-teal-900/30 min-h-screen pt-24 relative overflow-hidden bg-gradient-to-br">
      {/* Hero-style Background Effects - Matching green/emerald/teal theme */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-500/20 via-green-500/15 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-[120rem] mx-auto py-8 lg:py-12 xl:py-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="bg-slate-800/90 border-slate-700/50 text-white group flex items-center gap-2 backdrop-blur-sm transition-all duration-300"
            >
              <ArrowLeft 
                size={16} 
                className="transition-transform duration-300 group-hover:-translate-x-1" 
              />
              {language === 'nl' ? 'Terug naar Blog' : 'Back to Blog'}
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6 lg:p-8 xl:p-10">
                <Badge variant="secondary" className="text-emerald-300 mb-4 bg-blue-500/20 border-blue-500/30">
                  {getText(post.category)}
                </Badge>
                
                <h1 className="text-white font-bold mb-6 leading-tight">
                  {getText(post.title)}
                </h1>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {getText(post.excerpt)}
                </p>
                
                <div className="text-gray-400 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {post.readTime} {language === 'nl' ? 'min lezen' : 'min read'}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-slate-700/50 text-gray-300 border-slate-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Article Content */}
          <div className="max-w-5xl mx-auto">
            <Card className="bg-slate-800/90 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-6 lg:p-8 xl:p-10">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-gray-300 leading-relaxed">
                    {getText(post.content.introduction)}
                  </p>
                </motion.div>

                {/* Sections */}
                {post.content.sections.map((section, index) => renderSection(section, index))}

                {/* Conclusion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: post.content.sections.length * 0.1 }}
                  className="from-emerald-500/20 to-teal-500/20 mt-12 p-6 bg-gradient-to-r rounded-2xl border border-emerald-500/30"
                >
                  <h2 className="text-white font-bold mb-4">
                    {language === 'nl' ? 'Conclusie' : 'Conclusion'}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {getText(post.content.conclusion)}
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
