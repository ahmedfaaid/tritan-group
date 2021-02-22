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
    </Head>
  );
}
