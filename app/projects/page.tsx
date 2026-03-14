import { projects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="animate-fade-in mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 rounded-lg border bg-card p-4 shadow-sm"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={320}
              className="h-40 w-full rounded-md object-cover"
            />
            <h4 className="mt-2 text-lg font-bold">{project.name}</h4>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-muted px-2 py-0.5 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={project.url}
              target="_blank"
              className="mt-2 text-sm text-primary hover:underline"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
