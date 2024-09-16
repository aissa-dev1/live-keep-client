import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface HeadingProps extends ComponentProps<"h1"> {
  size?: keyof typeof HeadingSizes;
}

enum HeadingSizes {
  default = "text-2xl md:text-4xl lg:text-6xl",
  md = "text-xl md:text-2xl lg:text-4xl",
  sm = "text-lg md:text-xl lg:text-2xl",
}

export default function Heading(props: HeadingProps) {
  const [, rest] = splitProps(props, ["class", "children", "size"]);
  const sizeStyle = props.size
    ? HeadingSizes[props.size]
    : HeadingSizes["default"];

  return (
    <h1
      {...rest}
      class={cn("font-medium w-fit lg:w-[550px]", sizeStyle, props.class)}
    >
      {props.children}
    </h1>
  );
}
