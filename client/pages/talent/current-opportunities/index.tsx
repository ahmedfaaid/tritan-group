import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from 'date-fns';
import Link from 'next/link';
import { theme as t } from '../../../styles/Theme';
import Layout from '../../../components/layout';
import ImageStrip from '../../../components/ImageStrip';
import { trimText } from '../../../utils/general';
import { Job as JobType } from '../../../utils/types';

interface IJobs {
  jobs: JobType[];
}

const JobSection = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 425px) {
    display: block;
    padding: 1rem;
  }
`;

const JobCard = styled.a`
  display: block;
  width: 70%;
  height: 30rem;
  border-radius: 1rem;
  padding: 3rem 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-shadow: 0 5px 10px -5px;
  cursor: pointer;
  transition: color 0.1s;

  @media (max-width: 1024px) {
    width: 100%;
    height: 35rem;
  }

  @media (max-width: 768px) {
    height: 40rem;
  }

  @media (max-width: 425px) {
    width: 90%;
    height: 32rem;
  }

  @media (max-width: 320px) {
    height: 35rem;
  }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:hover {
    box-shadow: 0 2px 10px -5px;

    h2 {
      color: ${t.colors.primary};
    }

    & .view-more {
      color: ${t.colors.primary};
    }
  }

  h2 {
    font-size: 2rem;
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
    margin-top: 1rem;
  }

  & .summary {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    line-height: 1.5;

    @media (max-width: 425px) {
      font-size: 1.2rem;
      display: none;
    }
  }

  & .summary-2 {
    display: none;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.5;

    @media (max-width: 425px) {
      display: block;
    }
  }

  & .date {
    margin-top: 1.5rem;
    font-size: 1.4rem;
    color: ${t.colors.lightEbony};
  }

  & .view-more {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    font-style: italic;

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.6rem;
  color: ${t.colors.primary};
`;

export default function Jobs({ jobs }: IJobs) {
  return (
    <Layout page='Current Opportunities'>
      <section>
        <ImageStrip
          image='alvaro-reyes-6avV9oeHxfo-unsplash.jpg'
          text='Current Opportunities'
        />
        <JobSection>
          {jobs.map(job => (
            <Link href={`/talent/current-opportunities/${job.id}`} key={job.id}>
              <JobCard>
                <span className='view-more'>Click to view more</span>
                <h2>{job.title}</h2>
                <Icon icon={faMapMarkerAlt} />
                <p className='location'>{job.location}</p>
                {job.industry && <p className='industry'>{job.industry}</p>}
                <div className='summary'>
                  <p>{trimText(job.summary, 475)}</p>
                </div>
                <div className='summary-2'>
                  <p>{trimText(job.summary, 380)}</p>
                </div>
                <div className='date'>
                  <span>
                    {formatDistance(new Date(), new Date(job.date))} ago
                  </span>
                </div>
              </JobCard>
            </Link>
          ))}
        </JobSection>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const cmsUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.CMS_URL
      : 'http://localhost:1337';

  const res = await fetch(`${cmsUrl}/jobs?_sort=date:DESC`);

  const jobs = await res.json();

  return {
    props: {
      jobs
    }
  };
}
