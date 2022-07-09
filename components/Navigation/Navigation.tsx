import { ThemeSwitcher } from "components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Navigation.module.scss";

const navigation = [
  { name: "All recipes", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "About", href: "#", current: false },
];

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navInnerContainer}>
        <div className={styles.leftNav}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a className={styles.logoMobile}>
                <Image
                  src="/logo-mobile.svg"
                  height={30}
                  width={31}
                  alt="An image of our logo"
                />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.logoDesktop}>
                <Image
                  src="/logo-desktop.svg"
                  height={30}
                  width={140}
                  alt="An image of our logo"
                />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.rightNav}>
          <nav className={styles.navLinks}>
            {navigation.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={styles.link}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>

          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
