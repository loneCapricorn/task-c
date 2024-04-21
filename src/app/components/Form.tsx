"use client";

import { FormEvent } from "react";
import { BiEnvelope } from "react-icons/bi";

const Form = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //  Todo: Implement submit logic
    return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-[380px] items-center justify-center md:mt-[48px] h-16"
    >
      <div className="flex items-center bg-white py-3 rounded-l-md h-full px-3">
        <BiEnvelope className="h-[16px] w-[20px] md:h-[30px] md:w-[27px] text-2xl text-dark-blue-400 " />
        <input
          type="text"
          placeholder="Мобилен телефон"
          className="text-dark-blue-400 ml-3 outline-none placeholder:text-md placeholder:text-dark-blue-400"
        />
      </div>
      <button className="text-lg font-semibold text-dark-blue-900 bg-contact-green rounded-r-md h-full px-3">
        Изпрати
      </button>
    </form>
  );
};

export default Form;
