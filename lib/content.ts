import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Post {
  slug: string;
  title: string;
  description: string;
  type: string;
  date: string;
  content: string;
  targetKeywords?: string[];
  ideaName?: string;
  status?: string;
}

const typeToDirectoryMap = {
  'blog-post': 'content/blog',
  'comparison': 'content/comparison',
  'faq': 'content/faq'
};

export async function getAllPosts(type: keyof typeof typeToDirectoryMap): Promise<Post[]> {
  const directory = typeToDirectoryMap[type];
  
  try {
    const files = fs.readdirSync(directory);
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.md'))
        .map(async file => {
          const slug = file.replace(/\.md$/, '');
          return await getPostBySlug(type, slug);
        })
    );
    
    return posts
      .filter(post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    return [];
  }
}

export async function getPostBySlug(type: keyof typeof typeToDirectoryMap, slug: string): Promise<Post | null> {
  const directory = typeToDirectoryMap[type];
  const filePath = path.join(directory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      type: data.type || type,
      date: data.date || new Date().toISOString(),
      content: processedContent.toString(),
      targetKeywords: data.targetKeywords || [],
      ideaName: data.ideaName,
      status: data.status
    };
  } catch (error) {
    return null;
  }
}

export async function getAllSlugs(type: keyof typeof typeToDirectoryMap): Promise<string[]> {
  const directory = typeToDirectoryMap[type];
  
  try {
    const files = fs.readdirSync(directory);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}