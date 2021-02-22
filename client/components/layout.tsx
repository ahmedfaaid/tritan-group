import Head from 'next/head';
import Footer from './footer';
import Header from './header';
import Seo from './seo';

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap'
          rel='stylesheet'
        />
        <title>Tritan Group | {page}</title>
      </Head>
      <Seo page={page} />
      <div>
        <Header />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
