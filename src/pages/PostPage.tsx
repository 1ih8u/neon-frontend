import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import apiClient from '../services/api';

interface PostImage {
  id: number;
  image: string;
}

interface Post {
  id: number;
  title: string;
  shortDescription: string;
  fullContent: string;
  images: PostImage[];
  slug: string;
  meta_title?: string;
  meta_description?: string;
}

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      apiClient.get(`/api/posts/${slug}/`)
        .then(response => {
          setPost(response.data);
        })
        .catch(() => {
          setError('Не удалось загрузить статью.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Загрузка статьи...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (!post) {
    return <div className="text-center py-20">Статья не найдена.</div>;
  }

  const pageTitle = post.meta_title || post.title;
  const pageDescription = post.meta_description || '';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <article className="bg-[#161616] text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <header className="mb-8 md:mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>
          </header>
          
          {post.images && post.images.length > 0 && (
            <div className="mb-8 md:mb-12">
              <img src={post.images[0].image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg" />
            </div>
          )}

          <div 
            className="prose lg:prose-xl max-w-none mx-auto prose-invert"
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />

        </div>
      </article>
    </HelmetProvider>
  );
};

export default PostPage; 