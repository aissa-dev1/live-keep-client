import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface HighlightedSpanProps extends ComponentProps<"span"> {}

export default function HighlightedSpan(props: HighlightedSpanProps) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <span
      {...rest}
      class={cn("text-secondary-dark dark:text-secondary", props.class)}
    >
      {props.children}
    </span>
  );
}
