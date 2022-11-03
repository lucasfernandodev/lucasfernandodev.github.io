import React, { useState } from 'react';
import { Sun,Moon } from 'umbrella-icons-library';
import { Button } from '../../Atoms/Button';
import style from './style.module.css';

interface ButtonThemeSwitchProps {
  state: 'dark' | 'light'
}

export const ButtonThemeSwitch: React.FC<ButtonThemeSwitchProps> = ({
  state = 'dark'
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

  return (
    <Button.Root onClick={handlerToggleState}
      width='content' 
      size='md' 
      theme='outline' 
      appearance='dark' 
      float
      className={style.button}
      onMouseLeave={handleLeave}
    >
      <Button.Icon>
      {isState ==='dark'? <Sun/> : <Moon />}
      </Button.Icon>
    </Button.Root>
  )
};