import moneyHouse from "../../assets/images/money-house.jpg";
import { FaUmbrella } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInsurance = () => {
  return (
    <section className="md:text-lg xl:flex xl:flex-col">
      <article
        style={{
          backgroundImage: `url(${moneyHouse})`,
          height: "18rem",
        }}
        className="bg-contain bg-no-repeat bg-center md:bg-repeat xl:rounded-lg xl:flex-wrap"
      />
      <section className="flex flex-col items-center xl:flex-row xl:items-stretch">
        <div className="flex flex-col text-center bg-red p-8 m-2 shadow-2xl xl:rounded-lg xl:w-1/3">
          <div>
            <FaUmbrella className="h-10 w-80 mb-3 m-auto" />
          </div>
          <p className="text-gray text-xl font-bold">
            Financial Protection for Loved Ones
          </p>
          <span className="px-5 py-2 text-center text-white mb-5 shadow-md">
            Life insurance provides financial security for your loved ones in
            the event of your passing. It ensures that they are taken care of
            and can cover expenses such as funeral costs, outstanding debts,
            mortgage payments, and daily living expenses.
          </span>
        </div>

        <div className="flex flex-col text-center bg-green p-8 m-2 shadow-2xl xl:rounded-lg xl:w-1/3 ">
          <div>
            <FaPiggyBank className="h-10 w-80 mb-3 m-auto" />
          </div>
          <p className="text-gray text-xl font-bold">Peace of Mind</p>
          <span className="px-5 py-2 text-center text-white mb-5 shadow-md">
            Knowing that your loved ones will be financially protected and taken
            care of after you're gone can provide you with peace of mind. Life
            insurance offers a sense of security and ensures that your family's
            financial future is safeguarded.
          </span>
        </div>

        <div className="flex flex-col text-center bg-red p-8 m-2 shadow-2xl xl:rounded-lg xl:w-1/3 ">
          <div>
            <FaUserGraduate className="h-10 w-80 mb-3 m-auto" />
          </div>
          <p className="text-gray text-xl font-bold">Education Expenses</p>
          <span className="px-5 py-2 text-center text-white shadow-md">
            Life insurance can help secure funds for your children's education.
            It can cover their tuition fees, school expenses, and ensure they
            have the opportunity to pursue their educational goals.
          </span>
        </div>
      </section>
      <button className="m-5 bg-green px-6 py-1 mt-2 text-white rounded font-medium hover:bg-black/[.5]  block mx-auto">
        <Link to="/contact">Get in Touch</Link>
      </button>
    </section>
  );
};

export default GetInsurance;
