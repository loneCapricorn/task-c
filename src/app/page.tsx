import { Contact, Header, Pros, Services, Hero } from "./sections";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <section>
        <Pros />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
};

export default Home;
