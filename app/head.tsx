import { profile } from "@/data/profile"

export default function Head() {
  return (
    <>
      <title>{profile.name} | Modern Portfolio</title>
      <meta name="description" content={profile.bio} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
