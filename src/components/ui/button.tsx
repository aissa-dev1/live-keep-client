import { ComponentProps, splitProps } from "solid-js";
import { cn } from "~/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof ButtonVariants;
}

enum ButtonVariants {
  default = "bg-page-bg-dark text-page-color-dark dark:bg-page-bg dark:text-page-color hover:opacity-90",
  primary = "bg-[var(--primary)] text-white hover:opacity-90",
  ghost = "bg-transparent hover:opacity-50",
  bordered = "border border-[var(--secondary)] hover:opacity-75",
}

export default function Button(props: ButtonProps) {
  const [, rest] = splitProps(props, ["class", "children", "variant"]);
  const variantStyle = props.variant
    ? ButtonVariants[props.variant]
    : ButtonVariants["default"];

  return (
    <button
      {...rest}
      class={cn(
        "text-sm font-medium rounded-md capitalize",
        variantStyle,
        props.class
      )}
    >
      {props.children}
    </button>
  );
}
