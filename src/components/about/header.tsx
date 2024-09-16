import Heading from "../ui/heading";
import Text from "../ui/text";

export default function AboutHeader() {
  return (
    <div class="space-y-6">
      <Heading>About Livekeep</Heading>
      <div class="space-y-3">
        <Text>
          At Livekeep, our mission is simple: to provide a seamless note-taking
          experience that works wherever you do. Whether you're on your desktop,
          mobile, or using a web browser, Livekeep ensures your notes are synced
          in real-time across all your devices.
        </Text>
        <Text>
          We believe in productivity without boundaries. From students to
          professionals, creatives to planners, Livekeep is built for anyone who
          values their thoughts and ideas. Our easy-to-use interface and secure
          infrastructure allow you to focus on what truly matters—capturing and
          organizing your ideas effortlessly.
        </Text>
      </div>
    </div>
  );
}
