import { A } from "@solidjs/router";
import { onMount } from "solid-js";
import PrimaryLink from "~/components/primitives/primary-link";
import { useTitle } from "~/hooks/use-title";

export default function NotFound() {
  onMount(() => {
    useTitle("Livekeep | Not Found");
  });

  return (
    <main class="text-center mx-auto p-4">
      <h1 class="max-6-xs text-6xl text-[var(--primary)] font-thin uppercase my-16">
        Not Found
      </h1>
      <p class="mt-8">
        The link you followed may be broken or the page may have been removed!
      </p>
      <p class="my-4">
        <PrimaryLink href="/">Home</PrimaryLink>
        {" - "}
        <PrimaryLink href="/about">About Page</PrimaryLink>
      </p>
    </main>
  );
}
