import clsx from "clsx";
import React from "react";

export interface FlexProps extends React.PropsWithChildren {
  as?: string;
  column?: boolean;
  reverse?: boolean;
  wrap?: boolean;
  grow?: boolean;
  shrink?: boolean;
  initial?: boolean;
  justify?: "center" | "end";
  align?: "center" | "end";
  className?: string;
}

export const Flex = React.forwardRef(function Flex(
  {
    as = "div",
    column,
    reverse,
    wrap,
    grow,
    shrink,
    initial,
    justify,
    align,
    className,
    children
  }: FlexProps,
  ref
) {
  const Component = as as React.ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        !column && reverse && "flex-row-reverse",
        column && !reverse && "flex-col",
        column && reverse && "flex-col-reverse",
        wrap != null && "flex-nowrap",
        wrap && !reverse && "flex-wrap",
        wrap && reverse && "flex-wrap-reverse",
        grow && shrink && initial && "flex-auto",
        grow && shrink && !initial && "flex-1",
        grow && !shrink && !initial && "grow",
        !grow && !shrink && !initial && "flex-auto",
        !grow && initial && "flex-initial",
        !grow && shrink && !initial && "shrink",
        justify === "center" && "justify-center",
        justify === "end" && "justify-end",
        align === "center" && "items-center",
        align === "end" && "items-end",
        "flex",
        className
      )}
    >
      {children}
    </Component>
  );
});
