import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from "react";

type AsProp<C extends ElementType> = { as?: C };

type PropsToOmit<
  C extends ElementType,
  P
> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<
  C extends ElementType,
  Props = {}
> = PropsWithChildren<Props & AsProp<C>> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type RefedComponent = <C extends ElementType, P>(
  props: PolymorphicComponentProps<C, P> & {
    ref?: PolymorphicRef<C>;
  }
) => ReactElement | null;
