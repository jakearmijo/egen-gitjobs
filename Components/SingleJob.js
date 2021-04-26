// import Image from 'next/image'
import { Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

export default function SingleJob({ allJobs }) {
  return (
    <Col className='SingleJob'>
      {allJobs.map((job,idx) => {
        return (
          <Button textAlign="center" key={`${job.created_at}-${job.title}-${job.company}-${idx}`}>
            <img src={job.company_logo} width={25} height={25} />
            <h5>{job.created_at} <span>&#183;</span> {job.type}</h5>
            <h3>{job.title}</h3>
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
