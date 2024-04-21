import Card from "../components/Card";
import { services } from "../constants";

const Services = () => {
  return (
    <section>
      <h2 className="font-grotesk text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
        Други услуги
      </h2>
      <ul className="flex flex-wrap gap-12 mt-10">
        {services.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </ul>
    </section>
  );
};

export default Services;
