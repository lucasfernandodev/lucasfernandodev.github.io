import { Slot } from '@radix-ui/react-slot';
import style from './style.module.css';

export const ButtonIcon: React.FunctionComponent = ({children}) => {
  return (
    <Slot className={style.icon}>
      {children}
    </Slot>
  )
}