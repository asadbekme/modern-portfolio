export interface BlogPostFrontmatter {
  title: string
  date: string
  description?: string
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string
  content: string
}
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content")

export async function getAllPosts(): Promise<BlogPost[]> {
  const fileNames = await fs.readdir(postsDirectory)
  return Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(filePath, "utf8")
      const { data, content } = matter(fileContents)
      const { title, date, description } = data as BlogPostFrontmatter
      return {
        slug: fileName.replace(/\.md$/, ""),
        title,
        date,
        description,
        content,
      }
    })
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`)
  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContents)
    const { title, date, description } = data as BlogPostFrontmatter
    return { slug, title, date, description, content }
  } catch {
    return null
  }
}
