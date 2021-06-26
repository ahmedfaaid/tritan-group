import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import Layout from '../../../components/layout';
import { Job as JobType } from '../../../utils/types';
import { JobPost, Icon } from '../../../styles/jobPageStyles';
import { formatPhoneNumber } from '../../../utils/general';

interface IJob {
  job: JobType;
}

export default function Job({ job }: IJob) {
  const router = useRouter();
  return (
    <Layout>
      <section>
        <JobPost>
          <FontAwesomeIcon
            icon={faTimes}
            className='close-btn'
            onClick={() => router.back()}
          />
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
          <div className='duties'>
            <h2>Duties</h2>
            <ReactMarkdown>{job.duties}</ReactMarkdown>
          </div>
          <div className='qualifications'>
            <h2>Qualifications</h2>
            <ReactMarkdown>{job.qualifications}</ReactMarkdown>
          </div>
          <div className='benefits'>
            <h2>Benefits</h2>
            <p>{job.benefits}</p>
          </div>
          <div className='contact'>
            <p>
              If you are interested in taking your career to the next level,
              please send an updated resume to {job.contact_name} at{' '}
              <a href={`mailto:${job.contact_email}`}>{job.contact_email}</a> or
              call{' '}
              <a href={`tel:+1${job.contact_phone}`}>
                {formatPhoneNumber(job.contact_phone)}
              </a>
            </p>
          </div>
        </JobPost>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const cmsUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.CMS_URL
      : 'http://localhost:1337';

  const res = await fetch(`${cmsUrl}/jobs`);

  const jobs = await res.json();

  const paths = jobs.map(job => ({
    params: { id: job.id.toString() }
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const cmsUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.CMS_URL
      : 'http://localhost:1337';

  const res = await fetch(`${cmsUrl}/jobs/${params.id}`);
  const job = await res.json();

  return { props: { job } };
}
