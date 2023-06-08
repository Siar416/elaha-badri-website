import moneyHouse from "../../assets/images/money-house.jpg";
import { FaUmbrella } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInsurance = () => {
  return (
    <section>
      <article
        style={{
          backgroundImage: `url(${moneyHouse})`,
          height: "18rem",
        }}
        className="bg-contain bg-no-repeat bg-center"
      />
      <section className="bg-pink flex flex-col items-center pt-5">
        <div>
          <FaUmbrella className="h-10 w-80 mb-3" />
        </div>
        <p className="text-gray text-xl font-bold">
          Financial Protection for Loved Ones
        </p>
        <span className="px-5 py-2 text-center text-white mb-5">
          Life insurance provides financial security for your loved ones in the
          event of your passing. It ensures that they are taken care of and can
          cover expenses such as funeral costs, outstanding debts, mortgage
          payments, and daily living expenses.
        </span>

        <div>
          <FaPiggyBank className="h-10 w-80 mb-3" />
        </div>
        <p className="text-gray text-xl font-bold">Peace of Mind</p>
        <span className="px-5 py-2 text-center text-white mb-5">
          Knowing that your loved ones will be financially protected and taken
          care of after you're gone can provide you with peace of mind. Life
          insurance offers a sense of security and ensures that your family's
          financial future is safeguarded.
        </span>

        <div>
          <FaUserGraduate className="h-10 w-80 mb-3" />
        </div>
        <p className="text-gray text-xl font-bold">Education Expenses</p>
        <span className="px-5 py-2 text-center text-white">
          Life insurance can help secure funds for your children's education. It
          can cover their tuition fees, school expenses, and ensure they have
          the opportunity to pursue their educational goals.
        </span>
        <button className="m-5 bg-beige px-6 py-1 mt-2 text-pink rounded font-medium hover:bg-green hover:text-white">
          <Link to="/contact">Get in Touch</Link>
        </button>
      </section>
    </section>
  );
};

export default GetInsurance;
