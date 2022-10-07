import Link from "@/infra/Link";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { useRef } from "react";
import Icon from "@/components/Utils/Icon";
import { iconProviderTypes } from "@/components/Utils/Icon/iconProvider";

type buttonProps = {
  to?: string;
  type?: "Text" | "All" | 'Icon';
  height?: "sm";
  icon?: iconProviderTypes,
  onClick?: () => void;
};

const buttonTypeClasses = {
  Text: "Text",
  All: "All",
  Icon: 'Icon'
};

const buttonHeight = {
  sm: "sm",
};

const Button: React.FunctionComponent<buttonProps> = ({
  to,
  type = "Text",
  height,
  children,
  icon,
  ...attributes
}) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const ClassName = `
    ${style["Button"]} 
    ${style[buttonTypeClasses[type]]} 
    ${height && style[`height-${buttonHeight[height]}`]}
  `;

  function handleBtnKeyPress(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
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
      {icon && <Icon icon={icon}/>}
      {to && ( <Link className={style.link} href={to}> {children} </Link> )}
      {!to && children}
    </button>
  );
};

export default Button;
