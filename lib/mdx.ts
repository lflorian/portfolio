import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectFrontmatter {
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completedAt: string;
  slug: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  slug: string;
}

export function getProjectSlugs(): string[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  
  return fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogSlugs(): string[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }
  
  return fs.readdirSync(blogDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
} | null {
  try {
    const projectsDirectory = path.join(contentDirectory, 'projects');
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: { ...data, slug } as ProjectFrontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getBlogBySlug(slug: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} | null {
  try {
    const blogDirectory = path.join(contentDirectory, 'blog');
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      frontmatter: { ...data, slug } as BlogFrontmatter,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllProjects(): ProjectFrontmatter[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => {
      const project = getProjectBySlug(slug);
      return project ? project.frontmatter : null;
    })
    .filter(Boolean) as ProjectFrontmatter[];

  // Sort by completion date (newest first)
  return projects.sort((a, b) => 
    new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );
}

export function getAllBlogPosts(): BlogFrontmatter[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      return post ? post.frontmatter : null;
    })
    .filter(Boolean) as BlogFrontmatter[];

  // Sort by publish date (newest first)
  return posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedProjects(): ProjectFrontmatter[] {
  return getAllProjects().filter(project => project.featured);
}
