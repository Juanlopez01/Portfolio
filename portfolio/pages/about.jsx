import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ExperienceMob from '../components/ExperienceMob'
import Hero from '../components/hero'
import NavBar from '../components/NavBar'
import BgParticles from '../components/particlesBackground/BgParticles'
import StudiesMob from '../components/StudiesMob'
const About = () => {
  return (
    <div className='h-screen pb-20'>
    <BgParticles />
    <Head>
    <title>JUAN LOPEZ</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Montserrat:wght@200&display=swap" rel="stylesheet"/>
    </Head>
    <Hero />
    <div className=' p-4 m-auto flex flex-col items-center gap-20'>
      <p className='text-lg'>
      Hello! I am Juan, I help companies get closer to their dream website, through my knowledge and my tireless desire to learn, so that we both push ourselves to be our best versions.<br></br>
            I am 21 years old and I am Argentine, I study civil engineering and I graduated as Full Stack Web Developer.<br></br> 
            A few years ago I could start my own venture, and that, mixed with the interest that I always had to learn to program (because I think that everyone calls our attention the words of colors) made me the person that I am today, looking to help all those who, Like me, it was hard and difficult to push their ideas and dreams.<br></br> 
            I like to work as a team, I am very organized and I have many long-term goals.<br></br> 
            I play amateur football, I am passionate and eager to grow professionally.
      </p>
    </div>
    <ExperienceMob />
    <StudiesMob />
    <div className='flex justify-center p-7 pb-20'>
      <label htmlFor="my-modal-3" className="btn">Curriculum Vitae</label>
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <Link href='https://drive.google.com/file/d/1LMykmHPeesu4zOIP6u8SNgIkiR5sZsG2/view?usp=sharing' target='_blank' className='btn flex gap-4 mt-5'><img src='https://media.flaticon.com/dist/min/img/flags/es.svg' className='w-[30px]'/>Spanish</Link>
            <Link href='https://drive.google.com/file/d/1ry5f13KJbxPehEbEMIPCwek_CNFbN8o6/view?usp=sharing' target='_blank' className='btn flex gap-4 mt-5'><img src='https://media.flaticon.com/dist/min/img/flags/en.svg' className='w-[30px]'/>English</Link>
          </div>
        </div>
    </div>

    <NavBar/>
    </div>
  )
}

export default About