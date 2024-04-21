import { Contact, Header, Hero, Pros, Services, Solutions } from "./sections";

const Home = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <Hero />
      <Pros />
      <Solutions />
      <Contact />
      <Services />
    </main>
  );
};

export default Home;
