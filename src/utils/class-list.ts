class ClassList {
  private current: HTMLElement | null = null;

  add(...className: string[]): ClassList {
    if (this.current === null) return this;

    for (const cn of className) {
      this.current.classList.add(cn);
    }

    return this;
  }

  remove(...className: string[]): ClassList {
    if (this.current === null) return this;

    for (const cn of className) {
      this.current.classList.remove(cn);
    }

    return this;
  }

  change(current: HTMLElement): ClassList {
    this.current = current;
    return this;
  }
}

export const classList = new ClassList();
