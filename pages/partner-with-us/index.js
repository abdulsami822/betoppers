import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import clsx from "clsx";

import Layout from "../../components/Layout";
import SEO from "../../components/seo";

import classes from "./styles.module.scss";

export default function ContactUs() {
  const router = useRouter();

  return (
    <Layout>
      <SEO
        title="Partner With Us"
        description="contact us"
        url={router.asPath}
      />
      <section className={classes.partnerWithUsSection}>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <h1 className={classes.formHeader}>Partner With Us</h1>
            <div className={classes.inputContainer}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <input id="name" className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="phone" className={classes.label}>
                Phone
              </label>
              <input id="phone" className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="email" className={classes.label}>
                Email
              </label>
              <input id="email" className={classes.input} />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="describesYou" className={classes.label}>
                What best describes you
              </label>
              <select id="describesYou" className={classes.input}>
                <option value="none">-None-</option>
                <option value="author">Author</option>
                <option value="distributor">Distributor</option>
                <option value="educationalInstitute">
                  Educational Institute
                </option>
                <option value="coaching Institute">Coaching Institute</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="message" className={classes.label}>
                Want to tell us anything?
              </label>
              <textarea
                id="message"
                className={clsx(classes.input, classes.textarea)}
              />
            </div>
            <button className={classes.submitButton}>Get Started</button>
          </form>
        </div>
        <Image
          src="/partnerWithUs/partnerwithus.svg"
          alt="contact us"
          title="contact us"
          width={200}
          height={200}
          className={classes.image}
        />
      </section>
    </Layout>
  );
}
