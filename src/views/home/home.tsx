import { Events } from "../../components/events";
import { Footer } from "../../components/footer";
import { Hero } from "../../components/hero";
import { Search } from "../../components/search";

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
