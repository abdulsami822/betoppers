import { useRouter } from "next/router";
import React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";

import classes from "./styles.module.scss";

export default function AboutUs() {
  const router = useRouter();
  return (
    <Layout>
      <SEO title="About Us" description="about us" url={router.asPath} />
      <section className={classes.aboutUs}>
        <h1 className={classes.header}>About Us</h1>
        <p className={classes.content}>
          Over the last <span className={classes.highlight}>12 years</span>, USN
          Edutech Private Limited has championed the cause of supporting{" "}
          <span className={classes.highlight}>more than 200,000 Students</span>{" "}
          in K12 Segment in general and between{" "}
          <span className={classes.highlight}>Classes 6 - 12</span> in
          particular through its bouquet of Core Academic Products.
        </p>
        <p className={classes.content}>
          Our Flagship Product; Foundation Books || Classes 6-10 || Physics,
          Chemistry, Mathematics & Biology || Rigor of &apos;Comprehensive
          Practice&apos; - 23K+ Questions for Student to choose from - has
          massively supported Students who aspire to achieve Academic Excellence
          in Mathematics and Sciences; Clear their respective Board Exams like
          CBSE, ICSE and various State Boards in India and go on to Crack all
          important Competitive Exams like IIT JEE, NEET etc.
        </p>
        <p className={classes.content}>
          Our Products have niche; be it, Comprehensive Practice, Self
          Assessment & Evaluation and Affordable Price Range has made it
          possible for us to help Students achieve their dream.
        </p>
        <p className={classes.content}>
          We have success stories over the last decade where Students have
          achieved their aspirations (cracking board / competitive exams) from
          Tier-II and Tier-III towns, and across the rural landscapes of India.
        </p>
        <p className={classes.content}>
          Our B2B presence is made possible throughout India, with a successful
          network of Educational Institutions with whom we are reaching out to
          aspirant Students.
        </p>
        <p className={classes.content}>
          We also reach-out to Students directly through our e-commerce
          platforms for last 8 years.
        </p>
        <p className={classes.content}>
          Through our social outreach, we support the most deserving Students
          and promise to make them realize their Aspirations through our
          BeTOPPERS Products; and we have just started!!!
        </p>
      </section>
    </Layout>
  );
}
