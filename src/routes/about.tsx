import { onMount } from "solid-js";
import AboutHeader from "~/components/about/header";
import WhyLivekeep from "~/components/about/why-livekeep";
import Container from "~/components/reusable/container";
import Footer from "~/components/reusable/footer";
import Main from "~/components/reusable/main";
import NavBar from "~/components/reusable/nav-bar";
import Text from "~/components/ui/text";
import { useTitle } from "~/hooks/use-title";

export default function About() {
  onMount(() => {
    useTitle("Livekeep | About");
  });

  return (
    <>
      <NavBar />
      <Main>
        <Container class="space-y-6">
          <AboutHeader />
          <WhyLivekeep />
          <Text>
            We are continually expanding and improving Livekeep to make sure you
            have the best note-taking experience possible. Stay tuned for
            exciting updates!
          </Text>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
