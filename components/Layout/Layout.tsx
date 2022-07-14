import { CustomCursor, Footer, Navigation } from "components";
import React from "react";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <CustomCursor /> */}
      <div className={styles.container}>
        <Navigation />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
