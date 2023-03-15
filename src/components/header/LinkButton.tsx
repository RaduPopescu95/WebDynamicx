import Link, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

export const LinkButton: FC<
  Omit<LinkProps & HTMLProps<HTMLAnchorElement>, "href"> & { href?: string }
> = ({
  as,
  children,
  href = "",
  replace,
  scroll,
  shallow,
  passHref,
  className,
  title,
  onClick,
  ...rest
}) => (
  <Link
    legacyBehavior
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
  >
    <a className={className} {...rest}>
      {children || title}
    </a>
  </Link>
);

export default LinkButton;
