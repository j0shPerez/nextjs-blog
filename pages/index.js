import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Experience in my ojt was so amazing, because I'm taking my On the job traning in CLTV36, my work there was a camera man and sometimes technical support,
    everytime they had a outside interview or live telecast they always asking me if i want to go with them and i always agree beacuse for me that is a big opportunity to me 
    to experience that kind of field</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
