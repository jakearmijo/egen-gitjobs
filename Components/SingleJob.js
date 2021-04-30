// import Image from 'next/image'
import { Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { useRouter } from 'next/router'

export default function SingleJob({ allJobs }) {
  
  const router = useRouter()
  const handleClick = (event) => {
    event.preventDefault()
    router.push('')
  }
  return (
    <Col className='SingleJob'>
      {allJobs.map((job,idx) => {
        return (
              <Button onClick={handleClick} textAlign="center" key={`${job.created_at}-${job.title}-${job.company}-${idx}`}>
                <img src={job.company_logo} width={50} height={50} />
                <h5 className='jobTitleTester'>{job.created_at} <span>&#183;</span> {job.type}</h5>
                <h3 className='jobTitleTester'>{job.title}</h3>
                <h5>{job.company}</h5>
                <h5>
                  <p>
                    {job.location}
                  </p>
                </h5>
              </Button>
        )
      })}
    </Col>
  )
}
