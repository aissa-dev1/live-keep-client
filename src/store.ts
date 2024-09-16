import { AppearanceStore } from "./features/appearance";
import { AuthStore } from "./features/auth";

class Store {
  readonly appearance = new AppearanceStore();
  readonly auth = new AuthStore();
}

export const store = new Store();
