import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { color, rounded } from "@/lib/type";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-solid border-transparent! py-1 px-2 text-xs  capitalize font-semibold  transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      color: {
        default: "bg-default text-default-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground ",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-success  text-success-foreground ",
        info: "bg-info text-info-foreground ",
        warning: "bg-warning  text-warning-foreground",
      },
      rounded: {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      }
    },

    defaultVariants: {
      color: "default",
      rounded: "md",
    },
  }
);
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {

  color?: color;
  rounded?: rounded;
}


function Badge({ className, color, rounded, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ color, rounded }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
