import Head from 'next/head'
import Image from 'next/image'
import HEAD from '../components/HEAD'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HEAD/>
      <Hero />
    </>
  )
}
