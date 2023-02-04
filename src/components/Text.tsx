import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  RefedComponent,
} from "./types";

type TextProps = { color?: "black" | "white" | "red" };

export const Text: RefedComponent = forwardRef(
  <C extends ElementType>(
    {
      as,
      children,
      color,
      style,
      ...restProps
    }: PolymorphicComponentProps<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "span";

    const internalStyles = color
      ? { style: { ...style, color } }
      : { ...style };

    return (
      <Component
        {...restProps}
        {...internalStyles}
        ref={ref}
      >
        {children}
      </Component>
    );
  }
);
