import Link from '@/components/Utils/Link';
import style from './style.module.css';

type buttonProps = {
  to?: string,
  type?: 'Text' | 'Icon' | 'All'
}

const buttonTypeClasses = {
  Text: "Text",
  Icon: "Icon",
  All: "All"
}

const Button: React.FunctionComponent<buttonProps> = ({to, type  = 'Text', children, ...atr}) => {

  return (
    <button {...atr} className={`${style['button']} ${style[buttonTypeClasses[type]]}`}>

      {to && <Link href={to}>{children}</Link>}
      {!to &&children}


    </button>
  )
};

export default Button;