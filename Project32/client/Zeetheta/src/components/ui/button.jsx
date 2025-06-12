import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx"; // optional for combining classes

// Define the button styles using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border border-gray-300 text-black hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-100 text-black",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// You don’t need VariantProps — just use props directly
const Button = ({ variant, size, className, children, ...props }) => {
  return (
    <button className={clsx(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
};

export { Button };
