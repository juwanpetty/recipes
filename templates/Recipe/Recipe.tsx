import { InformationCircleIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./Recipe.module.scss";

const Recipe = () => {
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
                  <a
                    className={classNames(
                      styles.breadcrumbsLink,
                      styles.breadcrumbsLinkRoot
                    )}
                  >
                    Recipes
                  </a>
                </Link>
              </li>
              <li className={styles.breadcrumbsDividerContainer}>
                <span className={styles.breadcrumbsDivider}>/</span>
              </li>
              <li className={styles.breadcrumbsListItem}>
                <Link href="/">
                  <a className={styles.breadcrumbsLink}>Dinner</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.pageHeading}>
            <h1 className={styles.pageTitle}>Chicken &amp; Veggie Stir-Fry</h1>
            <p className={styles.pageDescription}>
              Getting take-out is a crave-worthy indulgence. And with our easy
              chicken veggie stir fry recipe, you can recreate the magic of a
              Chinese takeout right in your very own kitchen. Feel free to mix
              up the protein or vegetables depending on what you have in your
              fridge. The simple sauce packs a flavor punch that will bring the
              dish together, no matter what.
            </p>
          </div>

          <div className={styles.pageMeta}>
            <ul className={styles.metaList}>
              <li className={styles.metaListItem}>
                <h2>Total time</h2>
                <span>32 mins</span>
              </li>
              <li className={styles.metaListItem}>
                <h2>Prep time</h2>
                <span>20 mins</span>
              </li>
              <li className={styles.metaListItem}>
                <h2>Cook time</h2>
                <span>12 mins</span>
              </li>
              <li className={styles.metaListItem}>
                <h2>Serves</h2>
                <span>6</span>
              </li>
            </ul>
          </div>
        </header>
        <div className={styles.contentContainer}>
          <aside className={styles.asideContent}>
            <h2 className={styles.asideTitle}>Ingredients</h2>
            <div className={styles.ingredientGroup}>
              <ul className={styles.ingredientList}>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>1 lb</span>
                    <span className={styles.ingredientName}>
                      Chicken Breast
                      <br />
                      <span className={styles.ingredientModifier}>Cubed</span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}></span>
                    <span className={styles.ingredientName}>
                      Salt
                      <br />
                      <span className={styles.ingredientModifier}>
                        To taste
                      </span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}></span>
                    <span className={styles.ingredientName}>
                      Pepper
                      <br />
                      <span className={styles.ingredientModifier}>
                        To taste
                      </span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>1 lb</span>
                    <span className={styles.ingredientName}>
                      Broccoli Florets
                      <br />
                      <span className={styles.ingredientModifier}></span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>8 oz</span>
                    <span className={styles.ingredientName}>
                      Mushrooms
                      <br />
                      <span className={styles.ingredientModifier}>Sliced</span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>
                      3 tablespoons
                    </span>
                    <span className={styles.ingredientName}>
                      Oil
                      <br />
                      <span className={styles.ingredientModifier}>
                        For frying
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.ingredientGroup}>
              <h3 className={styles.ingredientGroupHeading}>Sauce</h3>
              <ul className={styles.ingredientList}>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>3</span>
                    <span className={styles.ingredientName}>
                      Garlic Cloves
                      <br />
                      <span className={styles.ingredientModifier}>Minced</span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>
                      1 tablespoon
                    </span>
                    <span className={styles.ingredientName}>
                      Ginger
                      <br />
                      <span className={styles.ingredientModifier}>Minced</span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>
                      2 teaspoons
                    </span>
                    <span className={styles.ingredientName}>
                      Sesame Oil
                      <br />
                      <span className={styles.ingredientModifier}></span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>1/3 cup</span>
                    <span className={styles.ingredientName}>
                      Soy Sauce
                      <br />
                      <span className={styles.ingredientModifier}>
                        Reduced sodium
                      </span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>
                      1 tablespoon
                    </span>
                    <span className={styles.ingredientName}>
                      Brown Sugar
                      <br />
                      <span className={styles.ingredientModifier}>
                        Reduced sodium
                      </span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>1 cup</span>
                    <span className={styles.ingredientName}>
                      Chicken Broth
                      <br />
                      <span className={styles.ingredientModifier}></span>
                    </span>
                  </span>
                </li>
                <li className={styles.ingredientListItem}>
                  <span className={styles.ingredient}>
                    <span className={styles.ingredientQuantity}>1/4 cup</span>
                    <span className={styles.ingredientName}>
                      Flour
                      <br />
                      <span className={styles.ingredientModifier}></span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </aside>
          <main className={styles.mainContent}>
            <h2 className={styles.mainTitle}>Preparation</h2>
            <div className={styles.preparationContainter}>
              <ol className={styles.preparationList}>
                <li className={styles.preparationListItem}>
                  <h3 className={styles.preparationHeading}>Step 1</h3>
                  <p className={styles.preparationText}>
                    In a large pan on medium-high heat, add 1 tablespoon of oil.
                    Once the oil is hot, add chicken, season with salt and
                    pepper, and sauté until cooked through and browned. Remove
                    cooked chicken from pan and set aside.
                  </p>
                </li>
                <li className={styles.preparationListItem}>
                  <h3 className={styles.preparationHeading}>Step 2</h3>
                  <p className={styles.preparationText}>
                    In the same pan, heat 1 tablespoon of oil and add mushrooms.
                    When the mushrooms start to soften, add broccoli florets and
                    stir-fry until the broccoli is tender. Remove cooked
                    mushrooms and broccoli from the pan and set aside.
                  </p>
                </li>
                <li className={styles.preparationListItem}>
                  <h3 className={styles.preparationHeading}>Step 3</h3>
                  <p className={styles.preparationText}>
                    Add 1 tablespoon of oil to the pan and sauté garlic and
                    ginger until fragrant. Add the remaining sauce ingredients
                    and stir until smooth.
                  </p>
                </li>
                <li className={styles.preparationListItem}>
                  <h3 className={styles.preparationHeading}>Step 4</h3>
                  <p className={styles.preparationText}>
                    Return the chicken and vegetables to the saucy pan, stir
                    until heated through.
                  </p>
                </li>
                <li className={styles.preparationListItem}>
                  <h3 className={styles.preparationHeading}>Step 5</h3>
                  <p className={styles.preparationText}>
                    Serve with hot rice or noodles.
                  </p>
                </li>
              </ol>
            </div>
            <div className={styles.noteContainer}>
              <h2 className={styles.noteTitle}>Notes</h2>
              <ul className={styles.noteList}>
                <li className={styles.noteListItem}>
                  <span className={styles.noteIcon}>
                    <InformationCircleIcon />
                  </span>
                  <p className={styles.noteText}>
                    <span className={styles.noteIngredient}>
                      Chicken Broth:
                    </span>{" "}
                    If you don’t have chicken broth you can use a chicken
                    bouillon cube and water. 1 cup of water to one bouillon
                    cube.
                  </p>
                </li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
