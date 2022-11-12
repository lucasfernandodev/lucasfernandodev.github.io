import NextLink from "next/link";
import React, { forwardRef, HTMLProps, Ref, RefObject } from "react";

interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  as?: string;
  passHref?: boolean;
  className?: string | undefined;
  passRef?: Ref<HTMLAnchorElement>;
}

const Component: React.FC<LinkProps> = ({
  href,
  as,
  passHref,
  target = "_self",
  passRef,
  children,
  ...arg
}) => {
  return (
    <NextLink 
      href={href} 
      as={as} 
      ref={passRef as any} 
      passHref={passHref} 
      target={target} 
      {...arg}
    >
      {children}
    </NextLink>
  );
};

const Link = React.forwardRef(
  ({ children, ...args }: LinkProps, ref?: Ref<HTMLAnchorElement>) => (
    <Component passRef={ref} {...args}>{children}</Component>
  )
);

export default Link;
