import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { theme as t } from '../../../styles/Theme';
import Layout from '../../../components/layout';
import { Job as JobType } from '../../../utils/types';

interface IJob {
  job: JobType;
}

const JobPost = styled.div`
  padding: 5rem;
  width: 90rem;
  margin: 0 auto;
  border: 1px solid black;

  & .title {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  & .location,
  .industry {
    display: inline-block;
    font-size: 1.6rem;
    color: ${t.colors.lightEbony};
  }

  & .industry {
    display: block;
    margin-bottom: 2rem;
  }

  & .horizontal-rule {
    margin: 2rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }

  & .summary {
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.6rem;
  color: ${t.colors.primary};
`;

export default function Job({ job }: IJob) {
  return (
    <Layout>
      <section>
        <JobPost>
          <div className='title'>
            <h1>{job.title}</h1>
          </div>
          {job.industry && (
            <div className='industry'>
              <p>{job.industry}</p>
            </div>
          )}
          <div>
            <Icon icon={faMapMarkerAlt} />
            <p className='location'>{job.location}</p>
          </div>
          <div className='horizontal-rule' />
          <div className='summary'>
            <h2>Summary</h2>
            <p>{job.summary}</p>
          </div>
        </JobPost>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/jobs');

  const jobs = await res.json();

  const paths = jobs.map(job => ({
    params: { id: job.id.toString() }
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/jobs/${params.id}`);
  const job = await res.json();

  return { props: { job } };
}
