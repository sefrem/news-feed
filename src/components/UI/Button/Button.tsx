import React from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  text,
  onClick,
  className = "",
  disabled,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        disabled ? styles.disabled : ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
