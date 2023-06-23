import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

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
    <section className="m-5">
      <span className="text-xl">Get In Touch</span>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-5">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="text"
            placeholder="Name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="email"
            placeholder="Email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="w-full h-52 p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
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
