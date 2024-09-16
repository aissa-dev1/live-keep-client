import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface MainProps extends ComponentProps<"main"> {}

export default function Main(props: MainProps) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <main {...rest} class={cn("mt-12", props.class)}>
      {props.children}
    </main>
  );
}
