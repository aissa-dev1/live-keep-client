import LogoImg from "~/components/reusable/logo-img";
import LogoText from "~/components/reusable/logo-text";
import Button from "~/components/ui/button";

export default function Header() {
  return (
    <header class="fixed top-0 left-0 z-10 flex flex-col justify-center w-full h-20 bg-opacity-25 shadow-sm shadow-white/10 backdrop-blur-lg backdrop-filter">
      <div class="flex items-center justify-between px-4">
        <div class="flex items-center gap-2">
          <LogoImg />
          <LogoText />
        </div>
        <div>
          <Button class="py-1 px-4">Menu</Button>
        </div>
      </div>
    </header>
  );
}
