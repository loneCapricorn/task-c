import Agenda from "../components/Agenda";
import { solutionItems } from "../constants";

const Solutions = () => {
  return (
    <section className="max-sm:text-sm">
      <h2 className="font-grotesk text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
        Решения
      </h2>
      <Agenda />
      <ul className="list-inside list-disc">
        {solutionItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Solutions;
