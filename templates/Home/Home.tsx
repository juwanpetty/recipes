import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageWrapper}>
        <header className={styles.pageHeader}>
          <div className={styles.pageHeading}>
            <h1 className={styles.pageTitle}>Recent Recipes</h1>
            <p className={styles.pageDescription}>
              Getting take-out is a crave-worthy indulgence. And with our easy
              chicken veggie stir fry recipe, you can recreate the magic of a
              Chinese takeout right in your very own kitchen.
            </p>
          </div>
        </header>
        <div className={styles.contentContainer}>
          <aside className={styles.aside}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupHeader}>Categories</h3>
              <ul className={styles.linkGroupList}>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>All</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Breakfast</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Dinner</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Soups</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Desserts</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Drinks</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkGroupHeader}>Tags</h3>
              <ul className={styles.linkGroupList}>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>All</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Breakfast</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Dinner</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Soups</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Desserts</a>
                  </Link>
                </li>
                <li className={styles.linkGroupItem}>
                  <Link href="/">
                    <a>Drinks</a>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <main className={styles.postGridContainer}>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
            <Link href="">
              <a>
                <article className={styles.postItem}>
                  <h2 className={styles.postItemTitle}>
                    Lesson 01: Create Forms that Convert
                  </h2>
                </article>
              </a>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
