import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import contactUs from "../../assets/images/contact-us.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const navigate = useNavigate();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const notify = (message) => toast(`📧 ${message}`);
  const notifyError = (message) => toast.error(`${message}`);

  const emailContent = {
    user_name: formData.user_name,
    user_email: formData.user_email,
    message: formData.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        "service_9xn152b",
        "contact_form",
        emailContent,
        "L5jeXXDUyCGrnk-BD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    notify("Thank you for your email!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.user_name || !formData.user_email || !formData.message) {
      notifyError("Please fill out all form fields");
      return false;
    }

    return true;
  };

  return (
    <section className="m-5 min-h-screen xl:flex xl:justify-between items-center">
      <div
        style={{
          backgroundImage: `url(${contactUs})`,
        }}
        className="bg-cover bg-no-repeat bg-center h-56 rounded-2xl flex justify-center items-center text-white shadow-md shadow-slate-600 md:h-96 xl:h-[50vh] xl:w-[45vw]"
      >
        <span className="text-xl md:text-3xl xl:hidden">Get In Touch</span>
      </div>

      <form onSubmit={handleSubmit}>
        <span className="hidden xl:block xl:text-3xl ">Get in Touch</span>
        <div className="flex flex-col mt-5">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600 xl:w-[50vw]"
            type="text"
            placeholder="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600 xl:w-[50vw]"
            type="email"
            placeholder="Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="w-full h-52 p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600 xl:w-[50vw]"
            placeholder="Type your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="py-2 px-6 bg-green text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
