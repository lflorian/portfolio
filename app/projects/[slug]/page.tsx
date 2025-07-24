import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.description,
      images: [project.frontmatter.image],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { frontmatter } = project;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {frontmatter.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {frontmatter.appUrl && (
              <a
                href={frontmatter.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                App Store
              </a>
            )}
            {frontmatter.githubUrl && (
              <a
                href={frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="max-w-4xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          {/* MDX content will be rendered here */}
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>

      {/* Project Info Sidebar */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Completed</h4>
            <p className="text-gray-600">
              {new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
