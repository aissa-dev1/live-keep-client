import { onMount } from "solid-js";
import HomeHeader from "~/components/home/header";
import Container from "~/components/reusable/container";
import Footer from "~/components/reusable/footer";
import Main from "~/components/reusable/main";
import NavBar from "~/components/reusable/nav-bar";
import { useTitle } from "~/hooks/use-title";

export default function Home() {
  onMount(() => {
    useTitle("Livekeep | Home");
  });

  return (
    <>
      <NavBar />
      <Main>
        <Container>
          <HomeHeader />
        </Container>
      </Main>
      <Footer />
    </>
  );
}
