import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import ProjectSection from "./components/ProjectSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d1f30]">
      <Navbar />
      <div className="container flex flex-col mx-auto mt-24 px-[5%] py-10">
        <HomeSection />
        <ProjectSection />
      </div>
    </main>
  )
}

export default Home;