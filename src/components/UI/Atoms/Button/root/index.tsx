import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";
import style from "./style.module.css";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  theme?: "normal" | "outline" | "link";
  appearance?: "primary" | "dark";
  size?: "sm" | "md" | "lg" | "2xl";
  width?: "content" | "full";
}

export const ButtonRoot: React.FunctionComponent<buttonProps> = ({
  className,
  theme = "normal",
  appearance = "primary",
  children,
  asChild,
  width = "content",
  size = "md",
  ...props
}) => {
  const Tag = asChild ? Slot : "button";
  const _className = [
    style.button,
    style[`size-${size}`],
    style[`${theme}`],
    style[`${appearance}`],
    className,
  ].join(" ");

  return (
    <Tag data-width={width} className={_className} {...props}>
      {children}
    </Tag>
  );
};
