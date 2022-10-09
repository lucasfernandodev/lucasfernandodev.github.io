import Link from '@/infra/Link';
import style from './style.module.css';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Icon from '@/components/Utils/Icon';
import { iconProviderTypes } from '@/components/Utils/Icon/iconProvider';

const buttonTypeClasses = {
  Text: 'Text',
  All: 'All',
  Icon: 'Icon',
  Action: 'Action',
};

const buttonHeight = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  sl: 'sl',
} as const;

interface buttonProps {
  to?: string;
  type?: 'Text' | 'All' | 'Icon' | 'Action';
  height?: keyof typeof buttonHeight;
  icon?: iconProviderTypes;
  onClick?: () => void;
  theme?: 'primary' | 'black' | 'outline';
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
}

const Button: React.FunctionComponent<buttonProps> = ({
  to,
  type = 'Text',
  height = 'sm',
  children,
  icon,
  theme = 'primary',
  target = '_self',
  ...attributes
}) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const ClassName = [
    style.Button,
    style[buttonTypeClasses[type]],
    style[`${buttonHeight[height]}`],
    style[`${theme}`],
  ].join(' ');


  function handleBtnKeyPress(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      if (refButton.current) {
        const selectLink = refButton.current.querySelector(`a`);
        selectLink && router.push(selectLink?.href);
      }
    }
  }

  return (
    <button
      ref={refButton}
      className={ClassName}
      onKeyPress={handleBtnKeyPress}
      {...attributes}
    >
      {icon && <Icon icon={icon} />}
      {to && (
        <Link target={target} className={style.link} href={to}>
          {children}
        </Link>
      )}
      {!to && children}
    </button>
  );
};

export default Button;
