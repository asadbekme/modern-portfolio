import { profile } from "@/data/profile"
import { projects } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <main className="animate-fade-in flex min-h-svh flex-col items-center justify-center p-6">
      <section className="flex w-full max-w-2xl flex-col items-center gap-4 py-12 text-center">
        <Image
          src={profile.social.github + ".png"}
          alt={profile.name}
          width={96}
          height={96}
          className="rounded-full border shadow"
        />
        <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
        <h2 className="text-lg font-medium text-primary">{profile.title}</h2>
        <p className="max-w-xl text-muted-foreground">{profile.bio}</p>
        <div className="mt-2 flex justify-center gap-3">
          <Link
            href={profile.social.github}
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link
            href={profile.social.linkedin}
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.social.twitter}
            target="_blank"
            className="hover:underline"
          >
            Twitter
          </Link>
        </div>
      </section>
      <section className="w-full max-w-4xl py-8">
        <h3 className="mb-6 text-2xl font-semibold">Projects</h3>
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
      </section>
    </main>
  )
}
