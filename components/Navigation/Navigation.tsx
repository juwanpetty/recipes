import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Navigation.module.scss";

const navigation = [
  { name: "Recipes", href: "/recipe", current: true },
  { name: "About", href: "#", current: false },
];

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navInnerContainer}>
        <div className={styles.leftNav}>
          {/* <div className={styles.logoContainer}>
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
          </div> */}
        </div>

        <div className={styles.rightNav}>
          {/* <nav className={styles.navLinks}>
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
          </nav> */}
          <div className={styles.searchIconContainer}>
            <Link href="/search">
              <a className={styles.searchIcon}>
                <SearchIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
