import Container from "./container";
import { createSignal, Show } from "solid-js";
import Menu from "./menu";
import { store } from "~/store";
import { A } from "@solidjs/router";
import Button from "../ui/button";
import OpacityText from "../primitives/opacity-text";
import PrimaryLink from "../primitives/primary-link";
import LogoText from "./logo-text";
import LogoImg from "./logo-img";

function NavLargeScreenMenu() {
  return (
    <div class="items-center gap-3 hidden md:flex">
      <A href="/about">
        <OpacityText>About</OpacityText>
      </A>
      <A href="/contact-us">
        <OpacityText>Contact us</OpacityText>
      </A>
      <span>|</span>
      <Button
        class="py-1.5 px-4"
        onClick={() => {
          store.appearance.toggleTheme();
        }}
      >
        {store.appearance.state.theme === "dark" ? "Light" : "Dark"}
      </Button>
      <Show
        when={!store.auth.state.isAuthenticated}
        fallback={
          <A href="/dashboard">
            <Button variant="primary" class="py-1.5 px-4">
              Dashboard
            </Button>
          </A>
        }
      >
        <A href="/login">
          <Button variant="ghost" class="py-1.5 px-4">
            Login
          </Button>
        </A>
        <A href="/sign-up">
          <Button variant="bordered" class="py-1.5 px-4">
            Sign up
          </Button>
        </A>
      </Show>
    </div>
  );
}

function NavSmallScreenMenu() {
  const [active, setActive] = createSignal(false);

  return (
    <div class="md:hidden">
      <Button class="py-1.5 px-4" onClick={() => setActive(true)}>
        Menu
      </Button>
      <Menu
        active={active}
        setActive={setActive}
        menuWrapperProps={{
          class: "p-4 flex flex-col gap-3",
        }}
      >
        <PrimaryLink href="/">Home</PrimaryLink>
        <PrimaryLink href="/about">About</PrimaryLink>
        <PrimaryLink href="/contact-us">Contact us</PrimaryLink>
        <PrimaryLink href="/terms">Terms & Conditions</PrimaryLink>
        <Button
          class="py-1.5 px-4 w-full"
          onClick={() => {
            store.appearance.toggleTheme();
          }}
        >
          {store.appearance.state.theme === "dark" ? "Light" : "Dark"}
        </Button>
        <Show
          when={!store.auth.state.isAuthenticated}
          fallback={
            <A href="/dashboard">
              <Button variant="primary" class="py-1.5 px-4 w-full">
                Dashboard
              </Button>
            </A>
          }
        >
          <div class="grid grid-cols-2 gap-4">
            <A href="/login">
              <Button variant="ghost" class="py-1.5 px-4 w-full">
                Login
              </Button>
            </A>
            <A href="/sign-up">
              <Button variant="bordered" class="py-1.5 px-4 w-full">
                Sign up
              </Button>
            </A>
          </div>
        </Show>
        <Button class="py-1.5 px-4 w-full" onClick={() => setActive(false)}>
          Close
        </Button>
      </Menu>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav class="py-4">
      <Container class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <LogoImg />
          <A href="/">
            <LogoText />
          </A>
        </div>
        <NavLargeScreenMenu />
        <NavSmallScreenMenu />
      </Container>
    </nav>
  );
}
