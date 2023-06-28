import client from "../../assets/images/elaha-favicon.jpg";
import { Link } from "react-router-dom";
import money from "../../assets/images/money.jpg";

const About = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${money})`,
      }}
      className="flex flex-col md:flex-row md:h-screen bg-cover bg-no-repeat xl:flex-col"
    >
      <article className="min-w-fit p-5 mx-auto md:my-auto">
        <img
          src={client}
          alt="client"
          className="object-cover h-96 rounded-full shadow-2xl shadow-slate-600  md:rounded-md md:h-96 md:object-cover md:w-96 "
        />
      </article>
      <div className="p-5 border-slate-500 border-t-2 bg-beige  md:border-t-0 md:flex md:flex-col md:justify-center md:text-lg md:bg-stone-900/70 md:text-white xl:text-center xl:mx-20 xl:mb-20">
        <p>
          My name is <strong>Elaha Badri</strong> and I am a Financial Advisor
          with expertise in providing personalized financial education and
          guidance to individuals, families, and businesses. <br />
          <br /> As a professional at Transamerica World Financial Group, I have
          extensive knowledge of the Canadian financial market and a proven
          track record of helping clients save on taxes, build wealth, and plan
          for the future. With my provincial license, I offer a wide range of
          insurance and investment services, including{" "}
          <strong>
            RRSPs, TFSAs, RESPs, life insurance, pet insurance, health
            insurance, and travel insurance.{" "}
          </strong>
          <br />
          <br />
          Whether you're just starting out or planning for retirement, I am here
          to help you make informed financial decisions.
        </p>
        <button className="m-5 bg-green px-6 py-1 mt-2 text-white rounded font-medium hover:bg-red hover:text-white block mx-auto md:mt-8">
          <Link to="/contact">Get in Touch</Link>
        </button>
      </div>
    </section>
  );
};

export default About;
