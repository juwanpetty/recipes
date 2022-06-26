import React from "react";
import {
  BookOpenIcon,
  InformationCircleIcon,
  UserGroupIcon,
  ChevronLeftIcon,
} from "@heroicons/react/solid";

import styles from "./Recipe.module.scss";

type RecipeProps = {};

const Recipe = (props: RecipeProps) => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.wrapper}>
        <div className={styles.meta}>
          <header>
            <h1 className={styles.title}>Chocolate chip cookies</h1>
            <p className={styles.description}>
              Divuldge in these incredibly moist, sticky chocolate chip cookies.
              They will literally melt in your mouth. And the best part is it
              only takes 10 minutes to cook.
            </p>
            <div className={styles.metaInformation}>
              <span className={styles.metaItem}>
                <BookOpenIcon /> Easy to make
              </span>
              <span className={styles.metaItem}>
                <UserGroupIcon /> Serves 3/4
              </span>
            </div>
          </header>
        </div>

        <div className={styles.backSection}>
          <a href="#" className={styles.back}>
            <ChevronLeftIcon />
            Back
          </a>
        </div>

        <main className={styles.content}>
          <h1 className={styles.sectionTitle}>Steps</h1>
          <ul className={styles.stepList}>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Preheat oven to 375 degrees F (190 degrees C).
              </p>
            </li>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Brush butter lightly over squash halves. Cover with aluminum.
              </p>
            </li>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Bake in the preheated oven until easily pierced with a fork,
                about 40 minutes. Cool until easily handled, about 15 minutes.
              </p>
            </li>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Preheat a large skillet over medium heat. Add ground beed; cook
                and stir until browned, about 5 minutes. Stire in tomatoes,
                mushrooms, red onion, green bell pepper, garlic, oregano, basil,
                salt, pepper, and thyme; cook, stirring occasionally, until
                flavors combine, 6 to 8 minutes.
              </p>
            </li>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Scrape squash flesh into the skillet; mix into the beef mixture.
                Spoon into a large casserole dish. Fold in mozzarella cheese;
                top with crushed crackers.
              </p>
            </li>
            <li className={styles.stepItem}>
              <p className={styles.step}>
                Bake in the preheated oven until golden brown, about 40 minutes.
              </p>
            </li>
          </ul>
          <section className={styles.notes}>
            <h1 className={styles.sectionTitle}>Notes</h1>
            <div className={styles.note}>
              <InformationCircleIcon />
              <p>
                <span className={styles.ingredientNote}>Cashews:</span> If your
                blender can’t blend raw cashews to a smooth consistency, soak
                them in boiling water for 10 minutes to soften them before
                blending. Make sure to drain the soaking water before adding to
                the blender.
              </p>
            </div>
          </section>
          <div className={styles.controls}>
            <button className={styles.button}>Print</button>
          </div>
        </main>

        <aside className={styles.ingredients}>
          <h1 className={styles.sectionTitle}>Ingredients</h1>
          <ul className={styles.ingredientsList}>
            <li className={styles.ingredientsItem}>
              <p className={styles.ingredient}>
                120 grams{" "}
                <span className={styles.ingredientName}>unsalted butter</span>
                <span className={styles.ingredientState}>softened</span>
              </p>
            </li>
            <li className={styles.ingredientsItem}>
              <p className={styles.ingredient}>
                85 grams{" "}
                <span className={styles.ingredientName}>light brown sugar</span>
              </p>
            </li>
            <li className={styles.ingredientsItem}>
              <p className={styles.ingredient}>
                85 grams{" "}
                <span className={styles.ingredientName}>
                  golden caster sugar
                </span>
              </p>
            </li>
            <li className={styles.ingredientsItem}>
              <p className={styles.ingredient}>
                1 <span className={styles.ingredientName}>medium egg</span>
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Recipe;
