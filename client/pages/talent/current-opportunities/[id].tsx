import Layout from '../../../components/layout';

export default function Job({ job }) {
  return (
    <Layout>
      <section>
        <h1>{job.title}</h1>
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
