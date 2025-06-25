import Hero from "@/components/Hero"
import FloatingNavbar from "@/components/ui/FloatingNavbar"
import MagicButton from "@/components/ui/MagicButton"
import { FaDownload} from "react-icons/fa"
import Image from 'next/image'
import Grid from "@/components/Grid"
import { navItems } from "@/data"
import {RecentProjects} from "@/components/RecentProjects"
import {Clients} from "@/components/Clients"
import { Experience } from "@/components/Experience"
import { Footer } from "@/components/Footer"


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto
     sm:px-10 px-5">
      <div className="max-w-7xl w-full pt-3">
        <FloatingNavbar navItems={navItems}/>
        <div className="flex justify-between items-end">
          <Image
            src="/Group.svg"
            width={60}
            height={60}
            alt="logo"/>
          <a className="flex justify-between items-center" href="/SansheyResume.pdf" download="SansheyResume">
            <MagicButton 
            title="Download Resume" 
            icon={<FaDownload/>} position="right"/>
          </a>
        </div>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  )
}
