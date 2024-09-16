import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  variant?: keyof typeof InputVariants;
}

enum InputVariants {
  default = "bg-[var(--bg-color)] text-[var(--color)] border border-[var(--border)] focus:border-[var(--primary)] placeholder:text-[var(--border)]",
}

export default function Input(props: InputProps) {
  const [, rest] = splitProps(props, ["class", "children", "variant"]);
  const variantStyle = props.variant
    ? InputVariants[props.variant]
    : InputVariants["default"];

  return (
    <input
      {...rest}
      class={cn(
        "outline-none rounded-md duration-300",
        variantStyle,
        props.class
      )}
    />
  );
}
