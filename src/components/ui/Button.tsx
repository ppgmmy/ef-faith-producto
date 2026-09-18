import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "md" | "sm";

const variantClass: Record<Variant, string> = {
  primary: "bg-pine text-linen hover:bg-moss",
  secondary:
    "border border-pine/25 text-pine hover:border-pine/50 hover:bg-pine/[0.03]",
  ghost:
    "border-b border-gold/50 pb-0.5 text-gold-soft hover:border-gold-soft rounded-none px-0",
  gold: "bg-gold text-pine-deep hover:bg-gold-soft",
};

const sizeClass: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-3 py-1.5 text-sm",
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex items-center justify-center tracking-wide transition duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-55 ${variantClass[variant]} ${sizeClass[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
