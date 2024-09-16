import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { onMount, Suspense } from "solid-js";
import "./app.css";
import { store } from "./store";
import { useAuthValidation } from "./hooks/use-auth-validation";

export default function App() {
  onMount(() => {
    store.appearance.applyStorageTheme();
    useAuthValidation();
  });

  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
