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
        <p>Hi my name is Josh Nathaniel Perez, I am now a 3rd year Computer engineering student
At the University of the Assumption. My other hobbies are playing basketball and riding a motorcycles and as of now i joined  2 basketball leagues in our barangay. I take computer engineering because now a days computer engineering is in demand now thats why i take this course. Now iwant to learn more about ths course because 5 years from now i want to see my self as a successful computer engineer. 
10 Things That Require Zero Talent

1. Being On Time
2. Making An Effort
3. Being High Energy
4. Having A Positive Attitude
5. Being Passionate
6. Using Good Body Language
7. Being Coachable
8. Doing A Little Extra
9. Being Prepared
10. Having A Strong Work Ethic
  </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
