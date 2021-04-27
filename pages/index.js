import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { NavBar } from '../Components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eGen - gitJobs</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://egen.solutions">eGen gitJobs!</a>
        </h1>
        <h1 className={styles.title}>
          Click Here  <Link href="/jobs">to see all open positions!</Link>
        </h1>
      </main>

      <footer className={styles.footer}>
          Brought to you by Jake Armijo{' '}
          <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
