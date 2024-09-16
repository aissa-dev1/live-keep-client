import { For } from "solid-js";
import { terms } from "../../data";
import Term from "./term";

export default function TermsList() {
  return (
    <div class="space-y-3">
      <For each={terms}>{(term) => <Term {...term} />}</For>
    </div>
  );
}
