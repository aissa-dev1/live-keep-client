import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface OpacityTextProps extends ComponentProps<"p"> {}

export default function OpacityText(props: OpacityTextProps) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <p {...rest} class={cn("hover:opacity-75", props.class)}>
      {props.children}
    </p>
  );
}
