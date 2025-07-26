import { notFound } from 'next/navigation';
import { getBlogBySlug, getBlogSlugs } from '@/lib/mdx';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      images: [blog.frontmatter.image],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { frontmatter, content } = blog;

  // Convert markdown content to HTML
  const htmlContent = marked.parse(content) as string;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
        <div className="py-0 mt-12">
          <Link href="/blog" className="text-gray-500 hover:text-gray-700 font-semibold text-md">
            back
          </Link>
          <h1 className="text-5xl md:text-4xl font-bold text-left mb-4">
            {frontmatter.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <time dateTime={frontmatter.date}>
              {frontmatter.date}
            </time>
          </div>

          {frontmatter.image && (
            <div className="mb-12">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1200}
                height={600}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>

        <article className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </div>
    </div>
  );
}