import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { formatDistance } from 'date-fns';
import { theme as t } from '../../styles/Theme';
import Layout from '../../components/layout';
import ImageStrip from '../../components/ImageStrip';
import { formatPhoneNumber, trimText } from '../../utils/general';

interface IJobs {
  jobs: Job[];
}

type Job = {
  id: number;
  title: string;
  location: string;
  summary: string;
  duties: string;
  qualifications: string;
  benefits: string;
  date: Date;
  industry: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};

const JobSection = styled.div`
  padding: 5rem;

  @media (max-width: 425px) {
    padding: 2rem;
  }
`;

const JobCard = styled.div`
  width: 60rem;
  height: 30rem;
  border-radius: 1rem;
  padding: 3rem 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-shadow: 0 5px 10px -5px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  &:hover {
    box-shadow: 0 2px 10px -5px;

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
      font-size: 0.8rem;
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
      </section>
      <JobSection>
        {jobs.map(job => (
          <JobCard key={job.id}>
            <span className='view-more'>Click to view more</span>
            <h2>{job.title}</h2>
            <Icon icon={faMapMarkerAlt} />
            <p className='location'>{job.location}</p>
            {job.industry && <p className='industry'>{job.industry}</p>}
            <div className='summary'>
              <p>{trimText(job.summary, 475)}</p>
            </div>
            <div className='date'>
              <span>{formatDistance(new Date(), new Date(job.date))} ago</span>
            </div>
          </JobCard>
        ))}
      </JobSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/jobs');

  const jobs = await res.json();

  return {
    props: {
      jobs
    }
  };
}
