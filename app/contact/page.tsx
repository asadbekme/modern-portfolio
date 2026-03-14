"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="animate-fade-in mx-auto max-w-lg px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold">Contact</h1>
      <p className="mb-6 text-muted-foreground">
        For inquiries, collaborations, or just to say hi, please email me at{" "}
        <a
          href="mailto:asadbek@example.com"
          className="text-primary hover:underline"
        >
          asadbek@example.com
        </a>
        .
      </p>
      <div className="rounded-lg border bg-card p-6">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Use shadcn/ui components for consistent styling */}
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" rows={4} required />
          <Button type="submit" disabled>
            Send (Mock Only)
          </Button>
        </form>
        <p className="mt-2 text-xs text-muted-foreground">
          * This form is for demo only. Please use email to contact.
        </p>
      </div>
    </main>
  )
}
