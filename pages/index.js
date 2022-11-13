import Image from "next/image";
import clsx from "clsx";

import Layout from "../components/Layout";

import classes from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <section className={classes.banner}>
        <div>
          <h1 className={classes.header}>
            We <br /> <span className={classes.highlight}>aspire</span> students{" "}
            <br /> to reach new heights
          </h1>
          <p className={classes.tagline}>CBSE, ICSE and State Boards</p>
          <p className={classes.tagline}>
            JEE, NEET, NTSE, OLYMPIAD and many more
          </p>
          <p className={clsx(classes.tagline, classes.lessSize)}>
            for Classes 6-10
          </p>
        </div>
        <Image
          src="/homepage/teacher.svg"
          alt="Education"
          title="Education"
          width={500}
          height={500}
          className={classes.bannerImage}
        />
      </section>
    </Layout>
  );
}
