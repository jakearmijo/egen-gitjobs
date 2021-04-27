import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { NavBar, JobTilesMain, SearchBar } from '../Components'
import { Row } from '@zendeskgarden/react-grid';
import { ensureArray } from '../lib/utils'





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
    {console.log("🚀 ~ file: jobs.js ~ line 26 ~ Jobs ~ styles.container ===", styles.container)}
    <Head>
      <title>gitJobs - All Open Jobs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <SearchBar />
    <main className={styles.main}>
      <Row className='AllJobsListing'>
      <JobTilesMain allJobs={ensureArray(allJobs)}/>
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
