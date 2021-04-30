import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
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

export default function Home({ allJobs }) {
  const [filteredData,setFilteredData] = useState(allJobs);

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const toggleDarkandLightMode = () => {
    return theme === 'light' ? '.jobViewLight' : '.jobViewDark'
  }

  const handleSearch = (event) => {
    event.preventDefault()
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allJobs.filter((data) => {
      return data.title.toLowerCase().search(value) != -1 || data.company.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
    value = ''
  }

  const handleSearchLocation = (event) => {
    event.preventDefault()
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allJobs.filter((data) => {
      return data.location.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }

  const handleSearchFullTime = (event) => {
    event.preventDefault()
    let value = event.target.checked;
    let result = []; 
    if(value === false){
      result = allJobs.filter((data) => {
        return data;
      })
    } else {
      result = allJobs.filter((data) => {
        return data.type === 'Full Time';
      })
    }
  
    setFilteredData(result);
  }

  return (
    <div className={toggleDarkandLightMode()}>
      <Head>
        <title>eGen - gitJobs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <NavBar themeToggler={themeToggler}/>
      <SearchBar handleSearch={handleSearch} handleSearchLocation={handleSearchLocation} handleSearchFullTime={handleSearchFullTime}/>
      <main className={styles.main}>
      <Row className='AllJobsListing'>
      <JobTilesMain allJobs={ensureArray(filteredData)}/>
      </Row>
      </main>
      <footer className={styles.footer}>
          Brought to you by Jake Armijo{' '}
          <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
