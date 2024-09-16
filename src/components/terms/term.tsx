import HighlightedSpan from "../primitives/highlighted-span";

export type TermType = {
  title: string;
  content: string;
};

export default function Term(props: TermType) {
  return (
    <div class="flex flex-col gap-1">
      <h1 class="font-medium text-lg shrink-0 md:text-xl lg:text-2xl">
        {props.title}
      </h1>
      <HighlightedSpan class="text-sm font-semibold md:text-lg">
        {props.content}
      </HighlightedSpan>
    </div>
  );
}
