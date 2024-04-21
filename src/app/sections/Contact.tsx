import Form from "../components/Form";

const Contact = () => {
  return (
    <section className="max-sm:text-sm flex flex-col items-center bg-dark-blue-700 w-screen text-main-white py-12">
      <h3 className="font-grotesk font-semibold">
        Готови ли сте да работим заедно?
      </h3>
      <p className="text-center mt-7 max-w-[85%]">
        Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
        всички въпроси
      </p>
      <Form />
    </section>
  );
};

export default Contact;
