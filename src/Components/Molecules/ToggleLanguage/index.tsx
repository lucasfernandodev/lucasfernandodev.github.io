import { useTranslation } from 'react-i18next';
import style from './style.module.css'
import { useEffect, useState } from "react"

export const ToggleLanguage = () => {

  const { i18n } = useTranslation();

  const isStorageLng = localStorage.getItem('i18nextLng')
  const [lang, setLang] = useState<string>(isStorageLng || 'pt_BR');


  function toggleLanguage() {
    setLang(lang === 'pt_BR' ? 'en' : 'pt_BR')
  }

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <button className={style.toggleLanguage} onClick={toggleLanguage}>
      {lang === 'pt_BR' ? 'PT' : lang.toUpperCase()}
    </button>
  )
}