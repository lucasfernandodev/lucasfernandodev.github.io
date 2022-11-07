import { useState } from "react";
import Brand from "../../Atoms/Brand";
import Navigation from "../../Atoms/Navigation";
import style from "./style.module.css";
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
    <header className={style.header} tabIndex={2}>
      <Brand />

      <div className={style.btnToggle}>
      <Button.Root
        theme="outline"
        appearance="dark"
        className={style.buttonNavigation}
        data-show={showMenuNavigation}
        onClick={handleToggleVisibilityMenu}
        aria-label="Abrir Menu"
        square
        style={{
          border: 'none'
        }}
      >
        {showMenuNavigation !== false ? <Close /> : <Menu />}
      </Button.Root>
      </div>

      <Navigation visibility={showMenuNavigation} />

      <ButtonThemeSwitch state="dark" />
    </header>
  );
}
