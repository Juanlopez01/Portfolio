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
        I am 21 years old and I live in Argentina.<br></br> I am a student of Civil Engineering and graduated as Full Stack Web Developer in the PERN stack. I am passionate about logic and sports. I am proactive, partner and above all, I enjoy learning a lot.
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