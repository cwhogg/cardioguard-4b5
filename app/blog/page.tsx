import { getAllPosts } from '../../lib/content';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardiovascular Health Blog — Tips & Guides | CardioGuard',
  description: 'Expert insights on advanced cardiovascular biomarkers, heart disease prevention, and getting the best heart tests without insurance barriers.',
};

export default async function BlogPage() {
  const posts = await getAllPosts('blog-post');

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Cardiovascular Health Blog</h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Get expert insights on advanced cardiovascular biomarkers, heart disease prevention strategies, and accessing the best heart tests without insurance barriers. Stay ahead of cardiovascular risk with evidence-based guidance.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-background-elevated border border-border rounded-lg p-8 hover:border-primary/20 transition-colors">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="text-2xl font-semibold mb-3 text-text group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <time className="text-text-muted text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-background-elevated border border-border rounded-lg p-12">
              <h2 className="text-xl font-medium text-text-muted mb-4">
                Coming Soon
              </h2>
              <p className="text-text-secondary">
                We're working on comprehensive guides about advanced cardiovascular testing. Check back soon for expert insights on ApoB, Lp(a), and other critical heart health biomarkers.
              </p>
            </div>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-border">
          <Link 
            href="/" 
            className="inline-flex items-center text-accent hover:text-primary-light transition-colors"
          >
            ← Back to CardioGuard
          </Link>
        </div>
      </div>
    </div>
  );
}