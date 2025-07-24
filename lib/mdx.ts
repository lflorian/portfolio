import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectFrontmatter {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  appUrl?: string;
  date: string;
  slug: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  image: string;
  date: string;
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

    // Convert markdown content to HTML
    const htmlContent = marked.parse(content) as string;

    return {
      frontmatter: { ...data, slug } as ProjectFrontmatter,
      content: htmlContent,
    };
  } catch {
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
  } catch {
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

  // Sort by date (newest first)
  return projects.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
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

  // Sort by date (newest first)
  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
