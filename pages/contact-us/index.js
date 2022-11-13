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
      <SEO title="Contact Us" description="contact us" url={router.asPath} />
      <section className={classes.contactUsSection}>
        <div className={classes.formContainer}>
          <form className={classes.form}>
            <h1 className={classes.formHeader}>Contact Us</h1>
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
              <label htmlFor="message" className={classes.label}>
                Message
              </label>
              <textarea
                id="message"
                className={clsx(classes.input, classes.textarea)}
              />
            </div>
            <button className={classes.submitButton}>Submit</button>
          </form>
        </div>
        <Image
          src="/contact-us/contactus.svg"
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

/**
 Description : A decentralised application for the purpose of charity is built on ethereum network to enable true transparency and trust using blockchain technology
 Technologies Used : 
  Blockchain: Metamask, Solidity, Ganache, Truffle, web3.js
  Frontend : Reactjs
*/
