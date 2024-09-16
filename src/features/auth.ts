import { createStore } from "solid-js/store";

interface AuthStoreState {
  isAuthenticated: boolean;
}

export class AuthStore {
  private readonly _store = createStore<AuthStoreState>({
    isAuthenticated: false,
  });

  setIsAuthenticated(authenticated: boolean) {
    this.setStore("isAuthenticated", authenticated);
  }

  private setStore<K extends keyof AuthStoreState>(
    key: K,
    value: AuthStoreState[K]
  ) {
    this._store[1](key, value);
  }

  get state(): AuthStoreState {
    return this._store[0];
  }
}
