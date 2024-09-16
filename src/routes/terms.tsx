import { onMount } from "solid-js";
import Container from "~/components/reusable/container";
import Footer from "~/components/reusable/footer";
import Main from "~/components/reusable/main";
import NavBar from "~/components/reusable/nav-bar";
import TermsHeader from "~/components/terms/header";
import TermsList from "~/components/terms/terms-list";
import { useTitle } from "~/hooks/use-title";

export default function Terms() {
  onMount(() => {
    useTitle("Livekeep | Terms & Conditions");
  });

  return (
    <>
      <NavBar />
      <Main>
        <Container class="space-y-6">
          <TermsHeader />
          <TermsList />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
