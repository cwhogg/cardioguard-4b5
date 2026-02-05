import { getAllSlugs, getPostBySlug } from '../../../lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs('blog-post');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug('blog-post', slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | CardioGuard',
    };
  }

  return {
    title: `${post.title} | CardioGuard`,
    description: post.description,
    openGraph: {
      title: `${post.title} | CardioGuard`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug('blog-post', slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'CardioGuard',
    },
  };

  return (
    <div className="min-h-screen bg-background text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-accent hover:text-primary-light transition-colors mb-6"
          >
            ← Back to Blog
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-text-muted text-sm mb-8">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose"
          />
        </article>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog" 
              className="text-accent hover:text-primary-light transition-colors"
            >
              ← More Articles
            </Link>
            <Link 
              href="/" 
              className="text-accent hover:text-primary-light transition-colors"
            >
              Get Advanced Heart Testing →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}