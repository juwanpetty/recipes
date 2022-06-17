import React from "react";
import { Navigation } from "components";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>{children}</div>
      {/* Footer */}
    </div>
  );
};

export default Layout;
