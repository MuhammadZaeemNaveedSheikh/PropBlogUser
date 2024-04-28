import Hero from "./components/hero"
import News from "./components/news/main"

const Home = () => {
  return (
    <div className="py-14 space-y-10">
      <Hero />
      <News />
    </div>
  )
}

export default Home
