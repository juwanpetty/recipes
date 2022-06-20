import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import {
  CheckIcon,
  SunIcon,
  MoonIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import useThemeSwitcher from "./useThemeSwitcher";

import styles from "./ThemeSwitcher.module.scss";

type ThemeSwitcherProps = {};

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, setLight, setDark, setAuto } = useThemeSwitcher();

  const themes = [
    {
      id: 1,
      name: "Light",
      icon: <SunIcon aria-hidden="true" />,
      onClick: () => setLight(),
    },
    {
      id: 2,
      name: "Dark",
      icon: <MoonIcon aria-hidden="true" />,
      onClick: () => setDark(),
    },
    {
      id: 3,
      name: "System",
      icon: <DesktopComputerIcon aria-hidden="true" />,
      onClick: () => setAuto(),
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  console.log("Theme:", theme);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Listbox value={selectedTheme} onChange={setSelectedTheme}>
          <Listbox.Button className={styles.button}>
            <span className="sr-only">{selectedTheme.name}</span>
            {selectedTheme.icon}
          </Listbox.Button>
          <Listbox.Options className={styles.options}>
            {themes.map((theme) => (
              <Listbox.Option
                as="button"
                key={theme.id}
                value={theme}
                onClick={theme.onClick}
              >
                {({ active, selected }) => (
                  <li className={styles.option}>
                    {selected && <CheckIcon />}
                    {theme.icon}
                    {theme.name}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
