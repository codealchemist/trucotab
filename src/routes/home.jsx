import { useLoaderData } from "react-router-dom"
import TrucoScore from "../components/TrucoScore"

export default function Home() {
  const data = useLoaderData()
  return (
    <section>
      <p>{data?.message}</p>
      <TrucoScore />
    </section>
  )
}
