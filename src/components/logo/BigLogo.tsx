import React from 'react';
import bem from "bem-css-modules";
import WhiteLogo from "./WhiteLogo";

import styles from "./BigLogo.module.scss";

const block = bem(styles);

const BigLogo = () => (
  <div className={block()}>
    <span className={block('wobble', {first: true})} />
    <span className={block('wobble', {second: true})} />
    <span className={block('wobble', {third: true})} />
    <div className={block('logo')}>
      <WhiteLogo />
    </div>
  </div>
);

export default BigLogo;