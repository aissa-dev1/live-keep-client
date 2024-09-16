import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface PrimaryAnchorProps extends ComponentProps<"a"> {}

export default function PrimaryAnchor(props: PrimaryAnchorProps) {
  const [, rest] = splitProps(props, ["class", "children", "href"]);

  return (
    <a
      {...rest}
      href={props.href!}
      class={cn("text-[var(--primary)] hover:underline", props.class)}
    >
      {props.children}
    </a>
  );
}
