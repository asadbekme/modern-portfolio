import { getPostBySlug } from "@/lib/posts"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"

interface BlogPostPageProps {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)
  if (!post) return notFound()
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <div className="mb-4 text-xs text-muted-foreground">{post.date}</div>
      <article className="prose dark:prose-invert">
        <MDXRemote source={post.content} />
      </article>
    </main>
  )
}
