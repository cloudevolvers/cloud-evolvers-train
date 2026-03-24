import { useParams, useNavigate } from "react-router-dom";
import { useTranslations } from "@/hooks/use-translations";
import { getBlogPost, getLocalizedBlogPost } from "@/data/blog-posts";
import { BlogPostView } from "@/components/BlogPostView";
import { NotFound } from "@/components/NotFound";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const { language } = useTranslations();
  const navigate = useNavigate();

  const rawPost = id ? getBlogPost(id) : null;
  const post = rawPost ? getLocalizedBlogPost(rawPost, language) : null;

  if (!post) return <NotFound />;

  return <BlogPostView post={post} onBack={() => navigate('/blog')} />;
}
