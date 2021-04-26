import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {SingleJob, NavBar, JobTilesMain } from '../Components'
import { Row } from '@zendeskgarden/react-grid';



export async function getStaticProps(){
  const res = await fetch("https://jobs.github.com/positions.json")
  const allJobs = await res.json()

  return {
    props: {
      allJobs,
    }
  }
}

function Jobs({ allJobs }) {
  return (
    <div className={styles.container}>
    <Head>
      <title>gitJobs - All Open Jobs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="">All Open Jobs page!</a>
      </h1>
      <Row className='AllJobsListing'>
      {/* <SingleJob allJobs={allJobs} /> */}
      <JobTilesMain allJobs={allJobs}/>
      </Row>
      <h1 className={styles.title}>
        Back to<Link href="/">Home Page!</Link>
      </h1>
    </main>

    <footer className={styles.footer}>
        Brought to you by Jake Armijo{' '}
        <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
    </footer>
  </div>
  )
}

export default Jobs
