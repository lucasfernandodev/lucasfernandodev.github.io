import NextLink from 'next/link';
import { Ref } from 'react';

type LinkProps = {
  href: string;
  as?: string;
  passHref?: boolean;
  className?: string | undefined;
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename';
  ref?: Ref<HTMLAnchorElement> | undefined
};

const Link: React.FC<LinkProps> = ({
  href,
  as,
  children,
  passHref,
  target = '_self',
  ref,
  ...arg
}) => {
  

  return (
    (<NextLink
      href={href}
      as={as}
      passHref={passHref}
      target={target}
      ref={ref}
      {...arg}
      >
      {children}

    </NextLink>)
  );
};

export default Link;
