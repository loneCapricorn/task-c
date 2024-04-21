import { navItems } from "../constants";

const Header = () => {
  return (
    <header className="flex gap-10">
      <div className="font-grotesk text-[29.65px] font-bold leading-[140%] tracking-[-0.62px]">
        Website
      </div>
      <nav>
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
    </header>
  );
};

export default Header;
