import { Contact, Header, Pros, Services, Solutions } from "../sections";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-40">
      <Header />
      <section>
        <Solutions />
      </section>
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
