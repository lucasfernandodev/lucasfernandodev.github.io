import Link from "@/components/Utils/Link";
import style from "./style.module.css";
import { useRouter } from "next/router";
import { useRef } from "react";

type buttonProps = {
  to?: string;
  type?: "Text" | "All";
  height?: "sm";
  onClick?: () => void;
};

const buttonTypeClasses = {
  Text: "Text",
  All: "All",
};

const buttonHeight = {
  sm: "sm",
};

const Button: React.FunctionComponent<buttonProps> = ({
  to,
  type = "Text",
  height,
  children,
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
      {to && ( <Link className={style.link} href={to}> {children} </Link> )}
      {!to && children}
    </button>
  );
};

export default Button;
