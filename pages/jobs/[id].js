import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import styled from "styled-components";
import renderHTML from 'react-render-html';
import { Col } from "@zendeskgarden/react-grid";
import { mediaQuery } from "@zendeskgarden/react-theming";
import { zdSpacingXxs } from "@zendeskgarden/css-variables";
import { NavBar, ButtonTemplate } from '../../Components'
import { ensureArray } from '../../lib/utils'
import { Tiles } from "@zendeskgarden/react-forms";

const { Tile: _Tile } = Tiles;


 export const SingleJobItemWrapper = styled(Col)`
  cursor: default;
  padding: 10px 10px 10px 10px;
  ${(p) => mediaQuery("down", "xs", p.theme)} {
    margin-top: ${(p) => p.theme.space};
  }
  border-radius: ${zdSpacingXxs};
  &:nth-of-type(odd) {
    padding-right: 4px;
  }
  &:nth-of-type(even) {
    padding-left: 4px;
  }
  &:nth-of-type(even) {
    padding-top: 4px;
  }
  &:nth-of-type(even) {
    padding-bottom: 4px;
  }
  `;
    
export const SingleJobTile = styled(_Tile)`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

export const SingleJobTileLabel = styled(Tiles.Label)`
  color: blue;
  cursor: default;
`;

export const StyledSingleJobDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  cursor: default;
`;

export const StyledHeaderSingle = styled.h4`
  display: block;
  color: grey;
  align-content: center;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 0;
  margin-right: 1px;
  font-weight: bold;
  cursor: default;
`
export const StyledHeaderSingleJobTitle = styled.h2`
  display: block;
  align-content: center;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 0;
  margin-right: 1px;
  font-weight: bold;
`


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
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>
      <NavBar />
    <SingleJobItemWrapper>
      <SingleJobTile>
        <img src={company_logo} width={200} height={100} />
        <div>
        <StyledHeaderSingleJobTitle>{company}</StyledHeaderSingleJobTitle>
        <StyledHeaderSingle>{ensureString(company_url)}</StyledHeaderSingle>
        <Link href={ensureString(company_url)}>
        <a target='_blank' href={ensureString(company_url)}>
        <ButtonTemplate name={companysite}/>
        </a>
        </Link>
        </div>
      </SingleJobTile>
      <SingleJobTile>
      <div>
        <StyledHeaderSingle>{created_at}<span>&#183;</span>{type}</StyledHeaderSingle>
        <StyledHeaderSingleJobTitle>{title}</StyledHeaderSingleJobTitle>
        <SingleJobTileLabel>{location}</SingleJobTileLabel>
        <a target='_blank' href={ensureString(company_url)}>
          <ButtonTemplate name={applynow}/>
        </a>
      </div>
      <div>
          {renderHTML(description)}
      </div>
      <div className='howtoapply'>
      <StyledHeaderSingleJobTitle>How to Apply?</StyledHeaderSingleJobTitle>
        {renderHTML(how_to_apply)}
      </div>
      <div className='titleLocApplyBottom'>
        <StyledHeaderSingleJobTitle>{title}</StyledHeaderSingleJobTitle>
        <SingleJobTileLabel>{location}</SingleJobTileLabel>
        <a target='_blank' href={ensureString(company_url)}>
          <ButtonTemplate name={applynow}/>
        </a>
      </div>
      </SingleJobTile>
    </SingleJobItemWrapper>
    <footer className={styles.footer}>
      Brought to you by Jake Armijo{' '}
      <img src="/images/logo.png" alt="Jake Logo" className={styles.logo} />
    </footer>
    </div>
  )
}

export default Job
