import {
  Accessor,
  ComponentProps,
  createEffect,
  onMount,
  Setter,
  splitProps,
} from "solid-js";
import { classList } from "~/utils/class-list";
import { cn } from "~/utils/cn";

interface MenuProps extends ComponentProps<"div"> {
  active: Accessor<boolean>;
  setActive: Setter<boolean>;
  menuWrapperProps?: ComponentProps<"div">;
}

export default function Menu(props: MenuProps) {
  const [, rest] = splitProps(props, [
    "class",
    "ref",
    "children",
    "active",
    "setActive",
    "menuWrapperProps",
  ]);
  let menuOverlayRef!: HTMLDivElement;
  let menuWrapperRef!: HTMLDivElement;

  onMount(() => {
    classList.change(menuOverlayRef).add("hidden");
  });

  createEffect(() => {
    if (props.active()) {
      classList.change(document.body).add("overflow-hidden");
      classList.change(menuOverlayRef).remove("hidden");
      setTimeout(() => {
        classList
          .change(menuWrapperRef)
          .remove("translate-x-full")
          .add("translate-x-0");
      }, 0);
      return;
    }

    classList
      .change(menuWrapperRef)
      .remove("translate-x-0")
      .add("translate-x-full");
    setTimeout(() => {
      classList.change(menuOverlayRef).add("hidden");
      classList.change(document.body).remove("overflow-hidden");
    }, 500);
  });

  return (
    <div
      {...rest}
      class={cn(
        "fixed top-0 left-0 w-screen h-screen bg-black/25",
        props.class
      )}
      ref={menuOverlayRef}
      onClick={(e) => {
        props.setActive(false);

        if (typeof props.onClick === "function") {
          props.onClick(e);
        }
      }}
    >
      <div
        {...props.menuWrapperProps}
        class={cn(
          "absolute w-3/4 h-full top-0 right-0 bg-[var(--bg-color)] duration-500",
          props.menuWrapperProps ? props.menuWrapperProps.class : ""
        )}
        ref={menuWrapperRef}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}
