import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import type { Post } from './PostCard';
import apiClient from '../services/api';

const BlogPostsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/api/posts/');
        // Убедимся, что images - это всегда массив
        const postsWithImages = response.data.map((post: any) => ({
          ...post,
          images: post.images || [],
        }));
        setPosts(postsWithImages);
        setError(null);
      } catch (err) {
        setError('Не удалось загрузить посты. Попробуйте позже.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="bg-[#161616] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsSection; 