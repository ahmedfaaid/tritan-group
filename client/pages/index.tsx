import FeaturedPostings from '../components/FeaturedPostings';
import Hero from '../components/Hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout page='Home'>
      <Hero />
      <FeaturedPostings />
    </Layout>
  );
}
