import React, { ButtonHTMLAttributes, useState } from 'react';
import { Sun,Moon } from 'umbrella-icons-library';
import { Button } from '../../Atoms/Button';
import style from './style.module.css';

interface ButtonThemeSwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: 'dark' | 'light',
  label?: boolean
}

export const ButtonThemeSwitch: React.FC<ButtonThemeSwitchProps> = ({
  state = 'dark',
  label = false
}) => {

  const [isState, setIsState] = useState<string>(state)


  function handlerToggleState() {
    const newState = (isState === 'dark') ? 'light' : 'dark'
    setIsState(newState)
    toggleTheme(newState)
  }

  function handleLeave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    let timer: any = null;

    timer = setTimeout(() => {
      const el = e.target as HTMLButtonElement
      el.blur()
      clearTimeout(timer)
    }, 100)
  }

  function toggleTheme(theme: string){
    document.body.dataset.theme = theme;
  }

  const labelText: Record<string, string> = {
    dark: 'Dark mode',
    light: 'Light mode'
  }

  return (
    <Button.Root onClick={handlerToggleState}
      width='content' 
      size='md'
      theme='outline' 
      appearance='dark' 
      float={!label ? true: false}
      className={[style.button, label ? style.label : ''].join(" ")}
      onMouseLeave={handleLeave}
    >
      <Button.Icon>
      {isState ==='dark'? <Sun/> : <Moon />}
      </Button.Icon>
      {label ? labelText[isState] : ''}
    </Button.Root>
  )
};