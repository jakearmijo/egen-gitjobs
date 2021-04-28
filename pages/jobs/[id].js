import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { NavBar, ButtonTemplate } from '../../Components'
import { ensureArray } from '../../lib/utils'

import renderHTML from 'react-render-html';

import { 
  JobListItemWrapper, 
  JobTile, 
  StyledHeader, 
  StyledHeaderJobTitle,
  JobTileLabel
 } from '../../Components/JobTilesMain'


export async function getStaticPaths(){
  const res = await fetch("https://jobs.github.com/positions.json")
  const allJobPaths = await res.json()

  const paths = ensureArray(allJobPaths).map((job) => {
      return `/jobs/${job.id}`
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }){
  const res = await fetch(`https://jobs.github.com/positions/${params.id}.json`)
  const job = await res.json()

  return {
    props: {
      job,
    }
  }
}


function Job({ job }) {
  const companysite = 'Company Site'
  const applynow = 'Apply Now'
  const { 
    company_logo, 
    company, 
    company_url, 
    created_at, 
    type, 
    title, 
    location, 
    description, 
    how_to_apply
  } = job

  return (
    <div className='jobView'>
      <Head>
        <title>{company} - {title}</title>
        <link rel="icon" href={company_logo} />
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <NavBar />
    <JobListItemWrapper>
      <JobTile>
        <img src={company_logo} width={100} height={100} />
        <h1>{company}</h1>
        <h4>{company_url}</h4>
        <Link href={company_url}>
        <a target='_blank' href={company_url}>
        <ButtonTemplate name={companysite}/>
        </a>
        </Link>
      </JobTile>
      <JobTile>
      <div>
        <StyledHeader>{created_at}<span>&#183;</span>{type}</StyledHeader>
        <StyledHeaderJobTitle>{title}</StyledHeaderJobTitle>
        <JobTileLabel>{location}</JobTileLabel>
        <a target='_blank' href={company_url}>
          <ButtonTemplate name={applynow}/>
        </a>
      </div>
      <div>
          {renderHTML(description)}
      </div>
      <div className='howtoapply'>
      <StyledHeaderJobTitle>How to Apply?</StyledHeaderJobTitle>
        {renderHTML(how_to_apply)}
      </div>
      <div className='titleLocApplyBottom'>
        <StyledHeaderJobTitle>{title}</StyledHeaderJobTitle>
        <JobTileLabel>{location}</JobTileLabel>
        <a target='_blank' href={company_url}>
          <ButtonTemplate name={applynow}/>
        </a>
      </div>
      </JobTile>
    </JobListItemWrapper>
    <footer className={styles.footer}>
      Brought to you by Jake Armijo{' '}
      <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
    </footer>
    </div>
  )
}

export default Job
