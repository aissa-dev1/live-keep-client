import Container from "./container";
import Menu from "./menu";
import { createEffect, createSignal, Show } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../ui/button";
import PrimaryAnchor from "../primitives/primary-anchor";

function FooterLargeScreenCode() {
  const [active, setActive] = createSignal(false);
  const [enteredPopUp, setEnteredPopUp] = createSignal(false);
  let disactivateTimeout: NodeJS.Timeout;

  createEffect(() => {
    if (active()) {
      disactivateTimeout = setTimeout(() => {
        if (enteredPopUp()) {
          clearTimeout(disactivateTimeout);
          return;
        }

        setActive(false);
        clearTimeout(disactivateTimeout);
      }, 1500);
    }
  });

  return (
    <div class="relative items-center gap-3 hidden lg:flex">
      <Button class="py-1 px-2" onMouseEnter={() => setActive(true)}>
        Code
      </Button>
      <Show when={active()}>
        <div
          class="flex items-center justify-center gap-8 absolute left-0 -top-14 w-[250px] p-2 bg-[var(--bg-color)] border border-[var(--secondary)] rounded-md"
          onMouseEnter={() => {
            setActive(true);
            setEnteredPopUp(true);
          }}
          onMouseLeave={() => {
            setActive(false);
            setEnteredPopUp(false);
          }}
        >
          <PrimaryAnchor href="https://github.com/aissa-dev1" target="_blank">
            Client
          </PrimaryAnchor>
          <PrimaryAnchor href="https://github.com/aissa-dev1" target="_blank">
            Server
          </PrimaryAnchor>
        </div>
      </Show>
    </div>
  );
}

function FooterSmallScreenCode() {
  const [active, setActive] = createSignal(false);

  return (
    <div class="lg:hidden">
      <Button class="py-1 px-2" onClick={() => setActive(true)}>
        Code
      </Button>
      <Menu
        active={active}
        setActive={setActive}
        menuWrapperProps={{
          class: "p-4 flex flex-col gap-3",
        }}
      >
        <PrimaryAnchor href="https://github.com/aissa-dev1" target="_blank">
          Client
        </PrimaryAnchor>
        <PrimaryAnchor href="https://github.com/aissa-dev1" target="_blank">
          Server
        </PrimaryAnchor>
        <Button class="py-1.5 px-4" onClick={() => setActive(false)}>
          Close
        </Button>
      </Menu>
    </div>
  );
}

export default function Footer() {
  return (
    <footer class="py-4 mt-12">
      <Container class="flex flex-col items-start justify-start gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <div class="w-full flex items-center justify-between md:items-start md:justify-start md:w-fit md:gap-3">
          <A href="/" class="hover:opacity-75">
            Home
          </A>
          <A href="/terms" class="hover:opacity-75">
            Terms & Conditions
          </A>
          <FooterLargeScreenCode />
          <FooterSmallScreenCode />
        </div>

        <a href="https://github.com/aissa-dev1" target="_blank">
          <p class="font-medium">©aissa-dev1</p>
        </a>
      </Container>
    </footer>
  );
}
