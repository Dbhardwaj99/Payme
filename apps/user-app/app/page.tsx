import { PrismaClient } from "@repo/db/client"
const prisma = new PrismaClient();

export default function Home(): JSX.Element {
  return(
    <div className="text-2xl">
      Hi from user-app
    </div>
  )
}
