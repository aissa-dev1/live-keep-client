import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface LogoImgProps extends Omit<ComponentProps<"img">, "src" | "alt"> {}

export default function LogoImg(props: LogoImgProps) {
  const [, rest] = splitProps(props, ["class", "children"]);

  return (
    <img
      {...rest}
      class={cn("size-7", props.class)}
      src="/vite.svg"
      alt="main logo"
    />
  );
}
