import Heading from "../ui/heading";
import HighlightedSpan from "../primitives/highlighted-span";
import Text from "../ui/text";

export default function WhyLivekeep() {
  return (
    <div class="space-y-6">
      <Heading>Why Livekeep?</Heading>
      <div class="space-y-3">
        <Text>
          Real-Time Sync:{" "}
          <HighlightedSpan>
            Your notes are always up to date, no matter where you access them.
          </HighlightedSpan>
        </Text>
        <Text>
          Multi-Device Access:{" "}
          <HighlightedSpan>
            Available on web, mobile, and desktop, with native apps coming soon.
          </HighlightedSpan>
        </Text>
        <Text>
          Simple & Secure:{" "}
          <HighlightedSpan>
            We prioritize ease of use and the privacy of your data.
          </HighlightedSpan>
        </Text>
      </div>
    </div>
  );
}
