import { createStore } from "solid-js/store";
import { Theme } from "./types";
import { classList } from "~/utils/class-list";

interface AppearanceStoreState {
  theme: Theme;
}

export class AppearanceStore {
  private readonly _store = createStore<AppearanceStoreState>({
    theme: "dark",
  });

  toggleTheme() {
    this.setTheme(this.state.theme === "dark" ? "light" : "dark");
  }

  setTheme(theme: Theme) {
    this.setStore("theme", theme);
    this.handleThemeChange();
  }

  applyStorageTheme() {
    const storageTheme = localStorage.getItem("theme") as Theme;

    if (storageTheme !== null) {
      this.setTheme(storageTheme);
      return;
    }

    this.setTheme(this.state.theme);
  }

  private handleThemeChange() {
    localStorage.setItem("theme", this.state.theme);

    classList.change(document.body);

    if (this.state.theme === "dark") {
      classList.add("dark");
      return;
    }

    classList.remove("dark");
  }

  private setStore<K extends keyof AppearanceStoreState>(
    key: K,
    value: AppearanceStoreState[K]
  ) {
    this._store[1](key, value);
  }

  get state(): AppearanceStoreState {
    return this._store[0];
  }
}
