import { profile } from "@/data/profile"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="animate-fade-in mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">About Me</h1>
      <p className="mb-4 text-muted-foreground">{profile.bio}</p>
      <ul className="mb-4 space-y-1">
        <li>
          <strong>Name:</strong> {profile.name}
        </li>
        <li>
          <strong>Title:</strong> {profile.title}
        </li>
        <li>
          <strong>Location:</strong> {profile.location}
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <Link
            href={`mailto:${profile.email}`}
            className="text-primary hover:underline"
          >
            {profile.email}
          </Link>
        </li>
      </ul>
      <div className="mt-2 flex gap-3">
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
          href={profile.social.website}
          target="_blank"
          className="hover:underline"
        >
          Website
        </Link>
      </div>
    </main>
  )
}
