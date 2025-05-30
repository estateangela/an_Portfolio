import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
   <main className="relative bg-black-100
   flex justify-center flex-col overflow-hidden mx-auto
   sm:px-10 px-5">
    <div className="max-w-7xl
    w-full">
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>}
      ]}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
    </div>
   </main>
  );
}

export default Home;
