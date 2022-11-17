import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react";
import Brand from "../../Atoms/Brand";
import Navigation from "../../Atoms/Navigation";
import style from "./style.module.css";
import { Button } from "../../Atoms/Button";
import { Close, Menu } from "umbrella-icons-library";

export default function Header() {
  let timer: any = null;
  const [showMenuNavigation, setShowMenuNavigation] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
   if(!showMenuNavigation && buttonRef.current){
      timer = setTimeout(() => {
        buttonRef.current !== null && buttonRef.current.blur()
        clearTimeout(timer)
      }, 150)
    }

    return () => {
      clearTimeout(timer)
    }

  }, [showMenuNavigation])

  return (
    <header className={style.header} tabIndex={2}>
      <Brand />

      <div className={style.btnToggle}>
      <button
        className={style.buttonNavigation}
        data-show={showMenuNavigation}
        onClick={() => setShowMenuNavigation(!showMenuNavigation)}
        aria-label="Abrir Menu"
        ref={buttonRef}
      >
        {showMenuNavigation !== false ? <Close style={{width: '12px', height: '12px'}}/> : <Menu />}
      </button>
      </div>

      <Navigation visibility={showMenuNavigation} />
      <div className={style.btnTheme}/>
    </header>
  );
}
