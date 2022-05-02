import React from "react";
import clsx from "clsx";

import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.animation}>
      <svg
        width="249"
        height="249"
        viewBox="0 0 249 249"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.05"
          d="M124.5 205.5C169.235 205.5 205.5 169.235 205.5 124.5C205.5 79.7649 169.235 43.5 124.5 43.5C79.7649 43.5 43.5 79.7649 43.5 124.5C43.5 169.235 79.7649 205.5 124.5 205.5Z"
          stroke="#5B6781"
        />
        <path
          className={styles.circle2}
          opacity="0.5"
          d="M116 43.9406C118.794 43.6493 121.629 43.5 124.5 43.5C127.714 43.5 130.884 43.6872 134 44.0512"
          stroke="#5B6781"
        />
        <g className={styles.innerGroup}>
          <path
            opacity="0.1"
            d="M124.5 192C161.779 192 192 161.779 192 124.5C192 87.2208 161.779 57 124.5 57C87.2208 57 57 87.2208 57 124.5C57 161.779 87.2208 192 124.5 192Z"
            stroke="#5B6781"
            strokeWidth="4"
          />
          <path
            opacity="0.2"
            className={styles.circle3}
            d="M124.5 192C161.779 192 192 161.779 192 124.5C192 87.2208 161.779 57 124.5 57C87.2208 57 57 87.2208 57 124.5C57 161.779 87.2208 192 124.5 192Z"
            stroke="#5B6781"
            strokeWidth="4"
          />
          <path
            className={styles.innerDash}
            d="M94.5 184.984C97.2334 186.342 100.072 187.52 103 188.504C109.753 190.771 116.983 192 124.5 192C132.764 192 140.682 190.515 148 187.797C150.756 186.773 153.427 185.575 156 184.215"
            stroke="#959AA5"
            strokeWidth="4"
          />
        </g>
        <g id="hexes">
          <path
            className={clsx(styles.hex, styles.hex1)}
            d="M108.5 83.866C109.428 83.3301 110.572 83.3301 111.5 83.866L121.49 89.634C122.419 90.1699 122.99 91.1603 122.99 92.2321V103.768C122.99 104.84 122.419 105.83 121.49 106.366L111.5 112.134C110.572 112.67 109.428 112.67 108.5 112.134L98.5096 106.366C97.5814 105.83 97.0096 104.84 97.0096 103.768V92.2321C97.0096 91.1603 97.5814 90.1699 98.5096 89.634L108.5 83.866Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex2)}
            d="M136.49 84.4019C137.418 83.866 138.562 83.866 139.49 84.4019L149.48 90.1699C150.409 90.7058 150.98 91.6962 150.98 92.768V104.304C150.98 105.376 150.409 106.366 149.48 106.902L139.49 112.67C138.562 113.206 137.418 113.206 136.49 112.67L126.5 106.902C125.572 106.366 125 105.376 125 104.304V92.768C125 91.6962 125.572 90.7058 126.5 90.1699L136.49 84.4019Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex3)}
            d="M150.49 108.402C151.418 107.866 152.562 107.866 153.49 108.402L163.48 114.17C164.409 114.706 164.98 115.696 164.98 116.768V128.304C164.98 129.376 164.409 130.366 163.48 130.902L153.49 136.67C152.562 137.206 151.418 137.206 150.49 136.67L140.5 130.902C139.572 130.366 139 129.376 139 128.304V116.768C139 115.696 139.572 114.706 140.5 114.17L150.49 108.402Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex4)}
            d="M136.49 132.402C137.418 131.866 138.562 131.866 139.49 132.402L149.48 138.17C150.409 138.706 150.98 139.696 150.98 140.768V152.304C150.98 153.376 150.409 154.366 149.48 154.902L139.49 160.67C138.562 161.206 137.418 161.206 136.49 160.67L126.5 154.902C125.572 154.366 125 153.376 125 152.304V140.768C125 139.696 125.572 138.706 126.5 138.17L136.49 132.402Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex5)}
            d="M108.49 132.402C109.418 131.866 110.562 131.866 111.49 132.402L121.48 138.17C122.409 138.706 122.98 139.696 122.98 140.768V152.304C122.98 153.376 122.409 154.366 121.48 154.902L111.49 160.67C110.562 161.206 109.418 161.206 108.49 160.67L98.5 154.902C97.5718 154.366 97 153.376 97 152.304V140.768C97 139.696 97.5718 138.706 98.5 138.17L108.49 132.402Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex6)}
            d="M94.4904 108.402C95.4184 107.866 96.5624 107.866 97.4904 108.402L107.48 114.17C108.409 114.706 108.98 115.696 108.98 116.768V128.304C108.98 129.376 108.409 130.366 107.48 130.902L97.4904 136.67C96.5624 137.206 95.4184 137.206 94.4904 136.67L84.5 130.902C83.5718 130.366 83 129.376 83 128.304V116.768C83 115.696 83.5718 114.706 84.5 114.17L94.4904 108.402Z"
            fill="#5B6781"
          />
          <path
            className={clsx(styles.hex, styles.hex7)}
            d="M122.49 108.402C123.418 107.866 124.562 107.866 125.49 108.402L135.48 114.17C136.409 114.706 136.98 115.696 136.98 116.768V128.304C136.98 129.376 136.409 130.366 135.48 130.902L125.49 136.67C124.562 137.206 123.418 137.206 122.49 136.67L112.5 130.902C111.572 130.366 111 129.376 111 128.304V116.768C111 115.696 111.572 114.706 112.5 114.17L122.49 108.402Z"
            fill="#5B6781"
          />
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
