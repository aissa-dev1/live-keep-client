import { A } from "@solidjs/router";
import Heading from "../ui/heading";
import Text from "../ui/text";
import Button from "../ui/button";
import { Show } from "solid-js";
import { store } from "~/store";

export default function HomeHeader() {
  return (
    <div class="space-y-6">
      <Heading>Effortlessly Sync and Access Your Notes Anywhere</Heading>
      <Text>
        All your notes, instantly synced across all your devices. Access
        Livekeep in your browser or download the app today. Coming soon: Native
        apps for iOS, Android, Mac, Windows, and Linux.{" "}
      </Text>
      <div>
        <Show
          when={!store.auth.state.isAuthenticated}
          fallback={
            <A href="/dashboard">
              <Button variant="primary" class="py-2.5 px-6 w-fit">
                Access it
              </Button>
            </A>
          }
        >
          <A href="/sign-up">
            <Button variant="primary" class="py-2.5 px-6 w-fit">
              Sign up now
            </Button>
          </A>
        </Show>
      </div>
    </div>
  );
}
