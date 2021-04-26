import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>eGen - gitJobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://egen.solutions">eGen gitJobs!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
          Brought to you by Jake Armijo{' '}
          <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
