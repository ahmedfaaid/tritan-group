import Head from 'next/head';
import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <title>Tritan Group | Home</title>
      </Head>
      <div>
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
