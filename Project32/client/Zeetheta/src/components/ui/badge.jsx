import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const badgeVariants = cva(
  "inline-block rounded-full px-2 py-1 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-black",
        error: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = ({ variant, className, children }) => {
  return (
    <span className={clsx(badgeVariants({ variant }), className)}>
      {children}
    </span>
  );
};

export { Badge };
