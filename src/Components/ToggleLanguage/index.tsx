import style from './style.module.css'
import { useState } from "react"

export const ToggleLanguage = () => {
  const [lang, setLang] = useState('PT');

  function toggleLanguage() {
    setLang(lang === 'PT' ? 'EN' : 'PT')
  }

  return (
    <button className={style.toggleLanguage} onClick={toggleLanguage}>
      {lang}
    </button>
  )
}