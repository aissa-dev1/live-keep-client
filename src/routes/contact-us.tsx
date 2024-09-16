import { onMount } from "solid-js";
import ContactUsHeader from "~/components/contact-us/header";
import HighlightedSpan from "~/components/primitives/highlighted-span";
import Container from "~/components/reusable/container";
import Footer from "~/components/reusable/footer";
import Main from "~/components/reusable/main";
import NavBar from "~/components/reusable/nav-bar";
import Heading from "~/components/ui/heading";
import Text from "~/components/ui/text";
import { useTitle } from "~/hooks/use-title";

export default function ContactUs() {
  onMount(() => {
    useTitle("Livekeep | Contact Us");
  });

  return (
    <>
      <NavBar />
      <Main>
        <Container class="space-y-6">
          <ContactUsHeader />
          <div class="space-y-3">
            <Heading size="md">General Inquiries:</Heading>
            <Text>
              Email: <HighlightedSpan>aissadev1@gmail.com</HighlightedSpan>
            </Text>
            <Text>
              Phone: <HighlightedSpan>+213 552467603</HighlightedSpan>
            </Text>
          </div>
          <div class="space-y-3">
            <Heading size="md">Follow Us:</Heading>
            <Text>
              Github: <HighlightedSpan>aissa-dev1</HighlightedSpan>
            </Text>
          </div>
          <Text>We look forward to connecting with you!</Text>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
