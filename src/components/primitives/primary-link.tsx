import { A } from "@solidjs/router";
import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface PrimaryLinkProps extends ComponentProps<"a"> {}

export default function PrimaryLink(props: PrimaryLinkProps) {
  const [, rest] = splitProps(props, ["class", "children", "href"]);

  return (
    <A
      {...rest}
      href={props.href!}
      class={cn("text-[var(--primary)] hover:underline", props.class)}
    >
      {props.children}
    </A>
  );
}
