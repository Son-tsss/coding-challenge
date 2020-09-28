import React from 'react';
import bem from "bem-css-modules";
import styles from "./PageContainer.module.scss";

const block = bem(styles);

type PageContainerProps = {
  children: React.ReactElement;
}

const PageContainer = ({children}: PageContainerProps) => (
  <div className={block()}>
    {children}
  </div>
);

export default PageContainer;
