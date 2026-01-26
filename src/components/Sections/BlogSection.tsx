import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Calendar,
    ArrowRight,
    User,
    Clock,
    Tag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";
import { getAllBlogPosts, getLocalizedBlogPost } from "@/data/blog-posts";

const BlogCard = ({ post, index }: { post: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full flex flex-col"
        >
            <Link to={`/blog/${post.slug || post.id}`} className="block h-full">
                <div className="h-full rounded-2xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
                    {/* Image */}
                    <div className="h-48 w-full bg-muted relative overflow-hidden">
                        {post.image ? (
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted-foreground/10" />
                                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                            </>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 backdrop-blur-md">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 font-mono">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-muted-foreground/20" />
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>5 min read</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] text-muted-foreground font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <span className="text-xs text-muted-foreground">{post.author}</span>
                            </div>
                            <span className="text-sm font-medium text-blue-500 group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Read Article <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export const BlogSection = () => {
    const { t, language } = useTranslations();
    const allPosts = getAllBlogPosts().slice(0, 3);
    const blogPosts = allPosts.map(post => getLocalizedBlogPost(post, language));

    return (
        <section className="py-32 relative bg-background overflow-hidden" id="blog">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute w-[800px] h-[800px] -top-[400px] -right-[200px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[120rem] relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            LATEST INSIGHTS
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                            Technical Deep Dives & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                Engineering Updates
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Stay ahead of the curve with our latest tutorials, architectural patterns, and Azure best practices.
                        </p>
                    </div>

                    <Link to="/blog">
                        <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:bg-accent gap-2">
                            View All Articles <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
