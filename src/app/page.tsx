import HomeSlider from "./components/HomeSlider";
import HomeCategories from "./components/HomeCategories";
export default function Home() {
  return (
      <section className={"mb-24"}>
          <HomeSlider />
          <section className={"container"}>
              <HomeCategories />
          </section>
      </section>
  );
}
