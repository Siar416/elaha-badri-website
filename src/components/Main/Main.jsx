import GetInsurance from "../GetInsurance/GetInsurance";

const Main = () => {
  return (
    <main className="flex flex-col text-gray md:mx-10">
      <h1 className="text-2xl align-center p-5 md:text-center md:mt-8 md:text-3xl">
        <span className="text-peach">Progressing</span> Towards{" "}
        <span className="text-green">Financial </span>
        Stability
      </h1>
      <p className="text-lg px-5 md:mb-8">
        Our financial professionals are dedicated to helping you achieve your
        life's goals by designing a strategy that is tailored to your specific
        needs. At our financial company, we are committed to assisting you in
        preparing for the long term with comprehensive solutions such as life
        insurance, education planning, and retirement strategies. Discover more
        about our company and our unwavering commitment to guiding you and
        millions of others across North America towards a secure and prosperous
        financial future.
      </p>
      <GetInsurance />
    </main>
  );
};

export default Main;
