import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageWrapper}>
        <header className={styles.pageHeader}>
          <div className={styles.breadcrumbsContainer}>
            <ul className={styles.breadcrumbsList}>
              <li className={styles.breadcrumbsListItem}>
                <Link href="/">
                  <a
                    className={classNames(
                      styles.breadcrumbsLink,
                      styles.breadcrumbsLinkRoot
                    )}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={styles.breadcrumbsDividerContainer}>
                <span className={styles.breadcrumbsDivider}>/</span>
              </li>
              <li className={styles.breadcrumbsListItem}>
                <Link href="/">
                  <a className={styles.breadcrumbsLink}>Search</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.pageHeading}>
            <h1 className={styles.pageTitle}>Search Results</h1>
            <p className={styles.pageDescription}>
              Showing 1587 results for “Dill”
            </p>
          </div>

          <form
            className={styles.searchForm}
            onSubmit={(event) => event.preventDefault()}
          >
            <label
              htmlFor="search"
              className={classNames(styles.searchLabel, "sr-only")}
            >
              Search
            </label>
            <input
              type="text"
              name=""
              id="search"
              className={styles.searchInput}
            />
          </form>
        </header>
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
        </main>
      </div>
    </div>
  );
};

export default Search;
