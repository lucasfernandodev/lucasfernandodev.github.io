import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { Sun,Moon } from 'umbrella-icons-library';
import style from './style.module.css';

interface ButtonThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: boolean,
  className?: string;
}

export const ButtonThemeSwitch: React.FC<ButtonThemeSwitchProps> = ({
  label = false,
  className,
  ...args
}) => {

  const [isDark, setIsDark] = useState<boolean>(true)

  useEffect(() => {
    const theme = document.body.dataset.theme;
    setIsDark(theme == 'dark' ? true : false);
  }, [])
  
  function toggleTheme(theme: string){
    document.body.dataset.theme = theme;
  }

  function handlerToggleState(){
    const theme = !isDark
    setIsDark(theme);
    toggleTheme(theme === false ? 'light' : 'dark');
  }

  return (
    <button 
      aria-label={!isDark ? 'Dark mode' : 'Light mode'} 
      className={[style.button, className].join(" ")} 
      {...args}
      onClick={handlerToggleState}
    >
      {!isDark ? <Moon /> : <Sun />}
    </button>
  )
};