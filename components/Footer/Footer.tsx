import Link from "next/link";
import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pageContainer}>
        <div className={styles.pageWrapper}>
          <div className={styles.topFooter}>
            <div className={styles.footerLinks}>
              <div className={styles.footerLinkGroup}>
                <h3 className={styles.linkGroupHeading}>Studio</h3>
                <div className={styles.linkGroup}>
                  <Link href="/">
                    <a>Our team</a>
                  </Link>
                  <Link href="/">
                    <a>How we work</a>
                  </Link>
                  <Link href="/">
                    <a>Culture</a>
                  </Link>
                  <Link href="/">
                    <a>Documentation</a>
                  </Link>
                </div>
              </div>
              <div className={styles.footerLinkGroup}>
                <h3 className={styles.linkGroupHeading}>Services</h3>
                <div className={styles.linkGroup}>
                  <Link href="/">
                    <a>Research</a>
                  </Link>
                  <Link href="/">
                    <a>Design</a>
                  </Link>
                  <Link href="/">
                    <a>Testing</a>
                  </Link>
                  <Link href="/">
                    <a>Development</a>
                  </Link>
                </div>
              </div>
              <div className={styles.footerLinkGroup}>
                <h3 className={styles.linkGroupHeading}>Resources</h3>
                <div className={styles.linkGroup}>
                  <Link href="/">
                    <a>Pricing</a>
                  </Link>
                  <Link href="/">
                    <a>Story</a>
                  </Link>
                  <Link href="/">
                    <a>Blog</a>
                  </Link>
                  <Link href="/">
                    <a>Projects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.pageContainer}>
          <div className={styles.bottomFooter}>
            <p className={styles.copy}>
              &copy; 2019 American Trade Exchange, Inc.
            </p>

            <div className={styles.footerInfo}>
              <a href="http://">Terms</a>
              <a href="http://">Privacy</a>
              <a href="http://">Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
