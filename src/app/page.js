import Navbar from "./components/Navbar";
import HomeSection from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d1f30]">
      <Navbar />
      <div className="container flex flex-col mx-auto mt-24 px-[5%] py-10">
        <HomeSection />
        <About />
        <Project />
      </div>
    </main>
  )
}

export default Home;