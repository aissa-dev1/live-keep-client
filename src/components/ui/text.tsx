import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface TextProps extends ComponentProps<"p"> {}

export default function Text(props: TextProps) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <p
      {...rest}
      class={cn(
        "text-sm font-semibold w-fit md:text-lg md:w-[600px]",
        props.class
      )}
    >
      {props.children}
    </p>
  );
}
