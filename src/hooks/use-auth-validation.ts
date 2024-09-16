import { store } from "~/store";

export function useAuthValidation() {
  store.auth.setIsAuthenticated(true);
}
