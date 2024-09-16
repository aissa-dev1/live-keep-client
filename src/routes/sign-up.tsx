import { A, useNavigate } from "@solidjs/router";
import { createEffect, onMount } from "solid-js";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import { useTitle } from "~/hooks/use-title";
import { store } from "~/store";

export default function SignUp() {
  const navigate = useNavigate();

  onMount(() => {
    useTitle("Livekeep | Sign Up");
  });

  createEffect(() => {
    if (store.auth.state.isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  });

  return (
    <div class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[325px]">
      <div class="flex flex-col items-center justify-center gap-5">
        <img class="size-16" src="/vite.svg" alt="logo" />
        <h3 class="text-3xl font-medium">Sign up</h3>
      </div>
      <div class="flex flex-col gap-4 mt-12">
        <Input type="email" placeholder="Email" class="px-4 py-2.5" />
        <Input type="password" placeholder="Password" class="px-4 py-2.5" />
        <Input type="text" placeholder="Name" class="px-4 py-2.5" />
        <Button class="py-2.5" variant="primary">
          Sign up
        </Button>
      </div>
      <div class="flex flex-col gap-4 mt-4 text-center">
        <p class="text-sm font-semibold text-[var(--border)]">
          By creating an account you agree to our{" "}
          <A href="/terms" class="text-[var(--primary)]">
            Terms of Service
          </A>
          .
        </p>
        <p class="text-sm font-semibold">
          Already have an account?{" "}
          <A href="/login" class="text-[var(--primary)]">
            Login
          </A>
        </p>
      </div>
    </div>
  );
}
