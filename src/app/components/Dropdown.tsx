import { navItems } from "../constants";

const Dropdown = () => {
  return (
    <div className="flex flex-col gap-10 absolute w-full top-14 bg-main-white">
      <nav className="flex flex-col gap-5 items-start">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-dark-blue-900 hover:underline"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex flex-col gap-4 ">
        <a href="#" className="text-dark-blue-900 hover:underline">
          Профил
        </a>
        <button className="border-[2px] border-dark-blue rounded-lg p-3 w-fit text-dark-blue hover:text-main-white hover:bg-dark-blue">
          Заявка за пратка
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
