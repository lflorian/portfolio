import { getAllBlogPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { StaggeredAnimation } from '@/app/components/StaggeredAnimation';

export const metadata: Metadata = {
  title: 'blog | florianlammert',
  description: 'A collection of my software development projects and technical work.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
        <h1 className="text-7xl md:text-7xl pt-4 font-bold text-left my-8">
        Blog
        </h1>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No posts found
            </h2>
          </div>
        ) : (
          <StaggeredAnimation 
            animation="scaleAndFade" 
            staggerDelay={75}
            duration={400}
          >
            {posts.map((post) => (
              <div key={post.slug} className="bg-white flex flex-col md:flex-row items-center gap-8 md:mb-6 mb-12">
                {/* Image placeholder */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square bg-white rounded-3xl shadow-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

              {/* Content section */}
              <div className="md:w-1/2 space-y-3">
                <h2 className="text-5xl font-bold text-gray-900">
                  {post.title}
                </h2>

                <p className="text-gray-500 font-medium text-lg">
                  {post.description}
                </p>

                <div className="flex gap-4">
                  <Link href={`/blog/${post.slug}`}>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </StaggeredAnimation>
        )}
      </div>
    </div>
  );
}
