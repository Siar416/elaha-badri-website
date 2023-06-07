import moneyTree from "../../assets/images/hero-money-tree.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <article
      className="flex items-center bg-no-repeat bg-cover bg-center md:bg-contain md:h-100"
      style={{ backgroundImage: `url(${moneyTree})`, height: "25rem" }}
    >
      <div className="flex flex-col items-center p-5 text-white text-lg">
        <span>
          Watch You Money{" "}
          <span className="text-green ml-1 font-bold">Grow!</span>
        </span>
        <button className="bg-beige px-6 py-1 mt-2 text-pink rounded font-medium hover:bg-black/[.5]">
          <Link to="/contact">Get in touch today</Link>
        </button>
      </div>
    </article>
  );
};

export default Hero;
