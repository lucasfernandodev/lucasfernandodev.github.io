import NextLink from 'next/link';
import { useRouter } from 'next/router';
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
  const { asPath } = useRouter();

  const isActive = asPath === href || asPath === as ? true : false;

  return (
    (<NextLink
      href={href}
      as={as}
      passHref={passHref}
      target={target !== undefined ? target : '_self'}
      {...arg}
      ref={ref}
      data-active={isActive}>

      {children}

    </NextLink>)
  );
};

export default Link;
