"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes, ElementType, ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "arrow";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  asChild?: boolean;
}

type PolymorphicComponentProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps & { as?: ElementType }>(
  ({ className, variant = "primary", size = "md", loading, children, disabled, asChild, as: As, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-ui-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-40 disabled:cursor-not-allowed";

    const variantStyles = {
      primary: "bg-brass text-charcoal hover:bg-brass-dim border border-brass",
      secondary: "bg-transparent text-charcoal border border-steel hover:bg-brass hover:text-charcoal hover:border-brass",
      ghost: "bg-transparent text-brass border-none hover:underline hover:underline-offset-2",
      arrow: "bg-brass text-charcoal border border-brass hover:bg-brass-dim",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const showArrow = variant === "arrow";

    const isAnchor = asChild;
    const Comp = isAnchor ? "a" : (As ?? "button");

    const buttonProps = {
      ref,
      className: cn(baseStyles, variantStyles[variant], sizeStyles[size], className),
      disabled: !isAnchor && (disabled || loading),
      ...(isAnchor ? {} : { type: "button" }),
      ...props,
    };

    const content = loading ? (
      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    ) : (
      showArrow ? (
        <>
          {children}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </>
      ) : (
        children
      )
    );

    return (
      <Comp {...buttonProps}>
        {content}
      </Comp>
    );
  }
);

Button.displayName = "Button";