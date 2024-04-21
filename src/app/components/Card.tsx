import Image, { StaticImageData } from "next/image";

const Card = ({
  src,
  heading,
  alt,
}: {
  src: StaticImageData;
  heading: string;
  alt: string;
}) => {
  return (
    <li className="flex flex-col items-center lg:items-start">
      <Image
        src={src}
        alt={alt}
        width={420}
        height={300}
        className="rounded-2xl transition duration-500 hover:scale-105 md:mb-[30px] md:w-full"
      />
      <a
        href="#"
        className="font-grotesk text-lg font-semibold md:text-2xl transition-all hover:underline"
      >
        {heading}
      </a>
    </li>
  );
};

export default Card;
