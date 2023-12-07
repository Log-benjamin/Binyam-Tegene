import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#1f1f1f]">
      <Navbar />
      <div className="conainer mt-24 mx-auto px-12 py-4">
        <HomeSection />
      </div>
    </main>
  )
}

export default Home;