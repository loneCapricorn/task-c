import { Contact, Header, Hero, Pros, Services, Solutions } from "./sections";

const Home = () => {
  return (
    <main className="flex flex-col items-center gap-14 w-[85%] mx-auto">
      <Header />
      <Hero />
      <Solutions />
      <Pros />
      <Contact />
      <Services />
    </main>
  );
};

export default Home;
