import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'
import BookFrame from './src/components/BookFrame/BookFrame'
import Intro from './src/components/Intro/Intro'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eme Thorne</title>
        <meta name="description" content="Eme Thorne Art" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
 <div className={styles.main}>
<Intro/>
 </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
