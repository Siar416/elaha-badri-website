import moneyTree from "../../assets/images/hero-money-tree.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <article
      className="flex items-center bg-no-repeat bg-cover bg-center md:flex-col-reverse md:mt-8 md:rounded-2xl md:mx-10 md:shadow-2xl xl:bg-cover xl:w-96 xl:mx-auto"
      style={{
        backgroundImage: `url(${moneyTree})`,
        height: "25rem",
      }}
    >
      <div className="flex flex-col items-center p-5 text-white text-lg md:bg-stone-900/70 md:rounded-2xl md:mb-2 ">
        <span>
          Watch You Money <span className="text-red ml-1 font-bold">Grow!</span>
        </span>
        <button className="bg-green px-6 py-1 mt-2 text-white rounded font-medium hover:bg-black/[.5]">
          <Link to="/contact">Get in touch today</Link>
        </button>
      </div>
    </article>
  );
};

export default Hero;
