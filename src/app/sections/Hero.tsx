import Image from "next/image";
import { truckImg } from "../../../public";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="w-[80%] text-center font-grotesk font-semibold text-dark-blue text-2xl sm:text-4xl lg:text-5xl xl:text-6xl lg:w-[50%]">
        Гъвкави решения за сухопътен транспорт за всеки клиент
      </h1>
      <Image
        src={truckImg}
        width={969}
        height={690}
        alt="truck"
        className="mt-6 max-w-[80%] lg:mt-[64px]"
      />
    </section>
  );
};

export default Hero;
