import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface LogoTextProps extends Omit<ComponentProps<"h3">, "children"> {}

export default function LogoText(props: LogoTextProps) {
  const [, rest] = splitProps(props, ["class"]);

  return (
    <h3 {...rest} class={cn("text-lg font-medium", props.class)}>
      Livekeep
    </h3>
  );
}
