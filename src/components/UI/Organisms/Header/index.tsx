import Icon from "@/components/Utils/Icon";
import { useState } from "react";
import Brand from "../../Atoms/Brand";
import Navigation from "../../Atoms/Navigation";
import styles from "./style.module.css";
import { ButtonThemeSwitch } from "../../Molecules/ButtonThemeSwitch";
import { Button } from "../../Atoms/Button";
import { Close, Menu } from "umbrella-icons-library";

export default function Header() {
  const [showMenuNavigation, setShowMenuNavigation] = useState<boolean>(false);

  function handleToggleVisibilityMenu() {
    if (showMenuNavigation === false) {
      setShowMenuNavigation(true);
    } else {
      setShowMenuNavigation(false);
    }
  }

  return (
    <header className={styles.header} tabIndex={2}>
      <Brand />

      <Button.Root
        theme="outline"
        appearance="dark"
        className={styles.buttonNavigation}
        data-show={showMenuNavigation}
        onClick={handleToggleVisibilityMenu}
        aria-label="Abrir Menu"
        square
      >
        {showMenuNavigation !== false ? <Close /> : <Menu />}
      </Button.Root>

      <Navigation visibility={showMenuNavigation} />

      <ButtonThemeSwitch state="dark" />
    </header>
  );
}
