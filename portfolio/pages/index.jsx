import Head from "next/head"
import React from "react"
import AboutMe from "../components/AboutMe"
import Carrousel from "../components/carrousel"
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Hero from "../components/hero"
import NavBar from "../components/NavBar"
import BgParticles from "../components/particlesBackground/BgParticles"
import SkillsMob from "../components/skills-mob"
import StudiesandSkills from "../components/Studies&Skills"

export default function Home() {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Montserrat:wght@200&display=swap" rel="stylesheet"/>
      </Head>
      <BgParticles />
      <NavBar />
      <div className="z-20">
        <div id="home">
          <Hero />
        </div>
        <div className="scroll max-sm:hidden">
          <a href=""><span></span></a>
        </div>
        <div id="projects">
          <Experience/>
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="studies">
          <StudiesandSkills />
        </div>
        <div id="contact">
          <Contact />
        </div>        
        <Carrousel />
        <SkillsMob />

      </div>
    </>
  )
}
