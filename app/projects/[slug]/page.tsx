import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedElement } from '@/app/components/AnimatedElement';
import { StaggeredAnimation } from '@/app/components/StaggeredAnimation';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter } = project;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-32">
        <AnimatedElement animation="fadeUp" delay={100}>
          <div className="py-0 mt-12">
            <Link href="/projects" className="text-gray-500 hover:text-gray-700 font-semibold text-md">
              back
            </Link>
            <h1 className="text-5xl md:text-4xl font-bold text-left mb-4">
              {frontmatter.title}
            </h1>

            {frontmatter.appUrl && (
              <a href={frontmatter.appUrl} className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-block">
                Download App
              </a>
            )}
          </div>
        </AnimatedElement>

        {/* Image Grid */}
        {frontmatter.images && frontmatter.images.length > 0 && (
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-6">
              {/* Large image at top */}
              <AnimatedElement animation="scaleAndFade" delay={300}>
                <div className="w-full">
                  <Image
                    src={frontmatter.images[0]}
                    alt={`${frontmatter.title} screenshot 1`}
                    width={1920}
                    height={1080}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </AnimatedElement>

              {/* Three images below */}
              {frontmatter.images.length > 1 && (
                <div className={`grid grid-cols-1 gap-6 ${frontmatter.images.slice(1, 4).length === 1
                  ? 'md:grid-cols-1 md:max-w-md md:mx-auto'
                  : frontmatter.images.slice(1, 4).length === 2
                    ? 'md:grid-cols-2'
                    : 'md:grid-cols-3'
                  }`}>
                  <StaggeredAnimation 
                    animation="scaleAndFade" 
                    staggerDelay={150}
                    duration={400}
                  >
                    {frontmatter.images.slice(1, 4).map((image, index) => (
                      <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={image}
                          alt={`${frontmatter.title} screenshot ${index + 2}`}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </StaggeredAnimation>
                </div>
              )}

              {/* Overview and Approach */}
              <AnimatedElement animation="fadeUp" delay={700}>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {frontmatter.overview && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Overview</h2>
                      <p className="text-gray-700 leading-relaxed">{frontmatter.overview}</p>
                    </div>
                  )}

                  {frontmatter.approach && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Approach</h2>
                      <p className="text-gray-700 leading-relaxed">{frontmatter.approach}</p>
                    </div>
                  )}
                </div>
              </AnimatedElement>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}