import Head from 'next/head'
import React from 'react'
import ContactFormMob from '../components/contactFormMob'
import Hero from '../components/hero'
import NavBar from '../components/NavBar'
import BgParticles from '../components/particlesBackground/BgParticles'
const Contact = () => {
  return (
    <>
    <BgParticles />
    <Head>
    <title>JUAN LOPEZ</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Montserrat:wght@200&display=swap" rel="stylesheet"/>
    </Head>
      <Hero />
      <ContactFormMob />
      <NavBar page='Home'/>
    </>
  )
}

export default Contact