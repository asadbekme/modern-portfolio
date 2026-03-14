import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <main className="animate-fade-in mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight">
        Blog
      </h1>
      <ul className="flex flex-col gap-8">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="group animate-fade-in cursor-pointer rounded-xl border bg-card/80 p-6 opacity-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 hover:shadow-lg"
            style={{
              animationDelay: `${i * 60}ms`,
              animationFillMode: "forwards",
            }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-bold text-primary transition-colors duration-200 group-hover:text-primary/80 group-hover:underline"
            >
              {post.title}
            </Link>
            <div className="mt-1 mb-2 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary/60" />
              {post.date}
            </div>
            <p className="text-base text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
              {post.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
