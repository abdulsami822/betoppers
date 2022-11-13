import React from "react";
import Image from "next/image";

import classes from "./styles.module.scss";
import clsx from "clsx";

export default function NextImage(props) {
  const { className, src, alt, ...rest } = props;

  //pass css properties via className prop

  return (
    <div className={clsx(classes.imageContainer, className?.imageContainer)}>
      <Image
        src={src}
        alt={alt}
        {...rest}
        className={clsx(classes.image, className?.image)}
      />
    </div>
  );
}
