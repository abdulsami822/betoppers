import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import classes from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialSection}>
        <Image
          src="/logo.png"
          alt="betoppers"
          title="betoppers"
          height={100}
          width={1920}
          className={classes.logo}
        />
        <div className={classes.iconContainer}>
          <AiFillFacebook className={classes.icon} />
          <AiFillTwitterSquare className={classes.icon} />
          <AiFillLinkedin className={classes.icon} />
        </div>
        <a href="info@usnedutech.com" className={classes.contactEmail}>
          info@usnedutech.com
        </a>
      </div>
      <div className={classes.addressContainer}>
        <div className={classes.address}>
          <h1 className={classes.header}>India Office</h1>
          <p className={classes.content}>
            USN Edutech Private Limited
            <br /> #16-2-753/A/1/1
            <br /> 4th Floor, Sri Sri House <br /> R.B Colony, Dilsukhnagar{" "}
            <br />
            Hyderabad - 500 060 <br /> Telangana, India.
          </p>
        </div>
        <div className={classes.address}>
          <h1 className={classes.header}>Oman Office</h1>
          <p className={classes.content}>
            AL Azm International LLC
            <br /> PO Box #1380 <br /> Postal Code #611 <br /> Opp. Dubai Gold.
            Main Street Ruwi, <br />
            Muscat Sultanate of Oman
          </p>
        </div>
      </div>
      <div className={classes.sitemapContainer}>
        <Link href="/products" className={classes.link}>
          Products
        </Link>
        <Link href="/contact-us" className={classes.link}>
          Contact us
        </Link>
        <Link href="/partner-with-us" className={classes.link}>
          Partner with us
        </Link>
        <Link href="/" className={classes.link}>
          Privacy Policy
        </Link>
        <Link href="/" className={classes.link}>
          Terms of Use
        </Link>
        <Link href="/" className={classes.link}>
          Disclaimer
        </Link>
      </div>
      <p className={classes.copyright}>
        USN Edutech Pvt.Ltd 2010-2014. All Rights Reserved.
      </p>
    </footer>
  );
}
