import Link from "next/link";
import React from "react";
import NextImage from "../NextImage";

import classes from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link href="/">
        <NextImage
          src="/logo.png"
          alt="betoppers"
          layout="fill"
          objectFit="contain"
          className={{ imageContainer: classes.logo }}
        />
      </Link>
      <div className={classes.navlinksContainer}>
        <Link className={classes.navlink} href="/products">
          Products
        </Link>
        <Link className={classes.navlink} href="/contact-us">
          Contact us
        </Link>
        <Link className={classes.navlink} href="/partner-with-us">
          Partner with us
        </Link>
        <Link className={classes.navlink} href="/about-us">
          About
        </Link>
      </div>
    </nav>
  );
}
