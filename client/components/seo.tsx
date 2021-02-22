import Head from 'next/head';
import { defaultTitle, description, hook, image, url } from '../utils/seoData';

export default function Seo({ page }) {
  const pageTitle = `${page} - Tritan Group - ${hook}`;

  const siteTitle = pageTitle || defaultTitle;

  return (
    <Head>
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      <meta name='twitter:card' content='summary' />

      <meta name='twitter:title' content={siteTitle} />

      {description && <meta name='twitter:description' content={description} />}

      {image && <meta name='twitter:image' content={image} />}

      {url && <meta property='og:url' content={url} />}

      <meta property='og:title' content={siteTitle} />

      {description && <meta property='og:description' content={description} />}

      {image && <meta property='og:image' content={image} />}

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicon/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicon/site.webmanifest' />
    </Head>
  );
}
