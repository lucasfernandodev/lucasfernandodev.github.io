import { useTranslation } from 'react-i18next';
import style from './style.module.css'
import { useEffect, useState } from "react"

export const ToggleLanguage = () => {

  const isPersistemLanguage = localStorage.getItem('locale_settled')

  const [lang, setLang] = useState<'PT' | 'EN'>(isPersistemLanguage !== null ? (isPersistemLanguage as "PT") : 'PT');

  const {i18n} = useTranslation();

  function toggleLanguage() {
    setLang(lang === 'PT' ? 'EN' : 'PT')
  }

  useEffect(() => {
    if(lang === "PT") {
      i18n.changeLanguage('pt_BR')
      localStorage.setItem('locale_settled', 'PT')
    }
    if(lang === "EN") {
      i18n.changeLanguage('en')
      localStorage.setItem('locale_settled', 'EN')}
  }, [lang])

  return (
    <button className={style.toggleLanguage} onClick={toggleLanguage}>
      {lang}
    </button>
  )
}