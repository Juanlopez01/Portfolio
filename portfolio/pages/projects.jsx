import React from 'react'
import Head from 'next/head'
import AllProjectsMob from '../components/allProjects'
import Carrousel from '../components/carrousel'
import Hero from '../components/hero'
import NavBar from '../components/NavBar'
import BgParticles from '../components/particlesBackground/BgParticles'

const Projects = () => {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Montserrat:wght@200&display=swap" rel="stylesheet"/>
      </Head>
    <div className='flex flex-col items-center gap-3'>
      <BgParticles />
      <Hero />
      <Carrousel />
      <AllProjectsMob />
      <NavBar/>
    </div>
    </>
  )
}

export default Projects