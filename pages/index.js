import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { NavBar, JobTilesMain, SearchBar } from '../Components'
import { Row } from '@zendeskgarden/react-grid';
import { ensureArray } from '../lib/utils'
import { lightTheme, darkTheme } from '../Components/Themes'



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
    console.log('excuse us as we work on changing themes')
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const toggleDarkandLightMode = () => {
    console.log("🚀 ~ file: index.js ~ line 27 ~ Home ~ theme", theme)
    return theme === 'light' ? '.jobViewLight' : '.jobViewDark'
  }
  console.log("🚀🚀🚀~ file: index.js ~ line 35 ~ toggleDarkandLightMode ~ This would switch the class", toggleDarkandLightMode())

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
    let value = event.target.checked;
    let result = []; 
    if(value === false){
      result = allJobs
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
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <NavBar themeToggler={themeToggler}/>
      <SearchBar handleSearch={handleSearch} handleSearchLocation={handleSearchLocation} handleSearchFullTime={handleSearchFullTime}/>
      <main className={styles.main}>
      <Row className='AllJobsListing'>
      <JobTilesMain allJobs={ensureArray(filteredData)}/>
      </Row>
      <h1 className={styles.title}>
        Back to <Link href="/">Home Page!</Link>
      </h1>
      </main>
      <footer className={styles.footer}>
          Brought to you by Jake Armijo{' '}
          <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
