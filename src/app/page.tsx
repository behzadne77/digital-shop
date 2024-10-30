import HomeSlider from "./components/HomeSlider";
import HomeCategories from "./components/HomeCategories";
import Discount from "./components/Discount";
export default function Home() {
  return (
      <section className={"mb-24"}>
          <HomeSlider />
          <section className={"container"}>
              <HomeCategories />
              <Discount />
          </section>
      </section>
  );
}
