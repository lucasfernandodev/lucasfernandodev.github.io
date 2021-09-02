import NextLink from 'next/link';
import { useRouter } from 'next/router'

type LinkProps  = {
  href: string,
  as?: string,
  passHref?: boolean
  className?: string | undefined
}

const Link: React.FC<LinkProps> = ({href,as, children, passHref, ...arg}) => {

  const { asPath } = useRouter()

  const isActive = asPath === href || asPath === as ? true : false;

  return (
    <NextLink href={href} as={as} {...passHref}>
      <a {...arg} data-display={isActive}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;