import * as React from "react";
import { cn } from "./utils";

export function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("shrink-0 bg-border h-[1px] w-full", className)}
      {...props}
    />
  );
}
