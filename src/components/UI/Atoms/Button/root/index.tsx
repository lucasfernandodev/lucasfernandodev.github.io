import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, Ref } from "react";
import style from "./style.module.css";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  theme?: "normal" | "outline" | "link";
  appearance?: "primary" | "dark";
  size?: "sm" | "md" | "lg" | "2xl";
  width?: "content" | "full";
  float?: boolean,
  square?: boolean,
  passRef?: Ref<HTMLButtonElement>
}

export const ButtonRoot: React.FunctionComponent<buttonProps> = ({
  className,
  theme = "normal",
  appearance = "primary",
  children,
  asChild = false,
  width = "content",
  size = "md",
  float = false,
  square = false,
  passRef = null,
  ...props
}) => {
  const Tag = asChild ? Slot : "button";

  const _className = [
    style.button,
    style[`${float ? 'float' : ' '}`],
    style[`${square ? 'square' : ' '}`],
    style[`size-${size}`],
    style[`${theme}`],
    style[`${appearance}`],
    className,
  ].join(" ");

  return (
    <Tag data-width={width} ref={passRef} className={_className} {...props}>
      {children}
    </Tag>
  );
};

