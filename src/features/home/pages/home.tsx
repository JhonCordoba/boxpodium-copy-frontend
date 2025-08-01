import { Events } from "../../../shared/components/events";
import { Footer } from "../../../shared/components/footer";
import { Hero } from "../../../shared/components/hero";
import { Search } from "../../../shared/components/search";

export function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <Events />
      <Footer />
    </div>
  );
}
