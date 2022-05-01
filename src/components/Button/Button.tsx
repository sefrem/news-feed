import React from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

type Props = {
  text: string;
  className?: string;
};

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
