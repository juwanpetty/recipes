import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
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
        <main className={styles.postGridContainer}>
          <article className={styles.postItem}>
            <Link href="/recipe">
              <a className={styles.postCategory}>Common Care Questions</a>
            </Link>
            <div>
              <Link href="/recipe">
                <a>
                  <h2 className={styles.postTitle}>
                    How to Fertilize Your Houseplants
                  </h2>
                </a>
              </Link>
              <Link href="/recipe">
                <a>
                  <p className={styles.postDescription}>
                    Getting take-out is a crave-worthy indulgence. And with our
                    easy chicken veggie stir fry recipe, you can recreate the
                    magic of a Chinese takeout right in your very own kitchen.
                  </p>
                </a>
              </Link>
              <Link href="/recipe">
                <a className={styles.postReadMore}>
                  Read more{" "}
                  <span className={styles.readMoreIconContainer}>
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </article>
          <article className={styles.postItem}>
            <Link href="/recipe">
              <a className={styles.postCategory}>Common Care Questions</a>
            </Link>
            <div>
              <Link href="/recipe">
                <a>
                  <h2 className={styles.postTitle}>
                    How to Fertilize Your Houseplants
                  </h2>
                </a>
              </Link>
              <Link href="/recipe">
                <a>
                  <p className={styles.postDescription}>
                    Getting take-out is a crave-worthy indulgence. And with our
                    easy chicken veggie stir fry recipe, you can recreate the
                    magic of a Chinese takeout right in your very own kitchen.
                  </p>
                </a>
              </Link>
              <Link href="/recipe">
                <a className={styles.postReadMore}>
                  Read more{" "}
                  <span className={styles.readMoreIconContainer}>
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </article>
          <article className={styles.postItem}>
            <Link href="/recipe">
              <a className={styles.postCategory}>Common Care Questions</a>
            </Link>
            <div>
              <Link href="/recipe">
                <a>
                  <h2 className={styles.postTitle}>
                    How to Fertilize Your Houseplants
                  </h2>
                </a>
              </Link>
              <Link href="/recipe">
                <a>
                  <p className={styles.postDescription}>
                    Getting take-out is a crave-worthy indulgence. And with our
                    easy chicken veggie stir fry recipe, you can recreate the
                    magic of a Chinese takeout right in your very own kitchen.
                  </p>
                </a>
              </Link>
              <Link href="/recipe">
                <a className={styles.postReadMore}>
                  Read more{" "}
                  <span className={styles.readMoreIconContainer}>
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </article>
          <article className={styles.postItem}>
            <Link href="/recipe">
              <a className={styles.postCategory}>Common Care Questions</a>
            </Link>
            <div>
              <Link href="/recipe">
                <a>
                  <h2 className={styles.postTitle}>
                    How to Fertilize Your Houseplants
                  </h2>
                </a>
              </Link>
              <Link href="/recipe">
                <a>
                  <p className={styles.postDescription}>
                    Getting take-out is a crave-worthy indulgence. And with our
                    easy chicken veggie stir fry recipe, you can recreate the
                    magic of a Chinese takeout right in your very own kitchen.
                  </p>
                </a>
              </Link>
              <Link href="/recipe">
                <a className={styles.postReadMore}>
                  Read more{" "}
                  <span className={styles.readMoreIconContainer}>
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </article>
          <article className={styles.postItem}>
            <Link href="/recipe">
              <a className={styles.postCategory}>Common Care Questions</a>
            </Link>
            <div>
              <Link href="/recipe">
                <a>
                  <h2 className={styles.postTitle}>
                    How to Fertilize Your Houseplants
                  </h2>
                </a>
              </Link>
              <Link href="/recipe">
                <a>
                  <p className={styles.postDescription}>
                    Getting take-out is a crave-worthy indulgence. And with our
                    easy chicken veggie stir fry recipe, you can recreate the
                    magic of a Chinese takeout right in your very own kitchen.
                  </p>
                </a>
              </Link>
              <Link href="/recipe">
                <a className={styles.postReadMore}>
                  Read more{" "}
                  <span className={styles.readMoreIconContainer}>
                    <ArrowNarrowRightIcon />
                  </span>
                </a>
              </Link>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default Home;
