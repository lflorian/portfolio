import { HeroSection } from "./sections/Hero";
import { SkillsSection } from "./sections/Skills";
import { getAllProjects, getAllBlogPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedElement } from '@/app/components/AnimatedElement';
import { StaggeredAnimation } from '@/app/components/StaggeredAnimation';

export default function Home() {
  const projects = getAllProjects();
  const blogPosts = getAllBlogPosts();

  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 pt-4">
        {/* Projects Section Header */}
        <AnimatedElement animation="fadeUp" delay={200}>
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Recent Projects
              </h2>
              <Link 
                href="/projects"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                View All →
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
      
      {/* Projects Horizontal Scroll - Full Width */}
      <AnimatedElement animation="fadeUp" delay={250}>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 w-max pl-6 sm:pl-8 lg:pl-[calc((100vw-72rem)/2+1.5rem)]">
            <StaggeredAnimation 
              animation="scaleAndFade" 
              staggerDelay={100}
              duration={400}
            >
              {projects.slice(0, 4).map((project) => (
                <Link 
                  key={project.slug} 
                  href={`/projects/${project.slug}`}
                  className="group"
                >
                  <div className="w-80 bg-white transition-shadow duration-300">
                    {/* Project Image */}
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={800}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </AnimatedElement>

      <div className="max-w-6xl mx-auto px-6">
        {/* Blog Section Header */}
        <AnimatedElement animation="fadeUp" delay={300}>
          <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Recent Blog Posts
              </h2>
              <Link 
                href="/blog"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                View All →
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
      
      {/* Blog Horizontal Scroll - Full Width */}
      <AnimatedElement animation="fadeUp" delay={350}>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-6 w-max pl-6 sm:pl-8 lg:pl-[calc((100vw-72rem)/2+1.5rem)]">
            <StaggeredAnimation 
              animation="scaleAndFade" 
              staggerDelay={100}
              duration={400}
            >
              {blogPosts.slice(0, 4).map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="w-80 bg-white transition-shadow duration-300">
                    {/* Blog Image */}
                    <div className="aspect-square bg-white rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={800}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Blog Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {post.description}
                      </p>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </AnimatedElement>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        {/* Skills Section */}
        <AnimatedElement animation="fadeUp" delay={400}>
          <SkillsSection />
        </AnimatedElement>

        {/* Contact Section */}
        <AnimatedElement animation="scaleAndFade" delay={500}>
          <div className="mt-24">
            <div className="bg-gray-100 rounded-3xl px-12 py-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Let&apos;s Connect 👋
              </h2>
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </main>
  );
}
