import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    emailBody: "",
  });

  return (
    <section className="m-5">
      <span className="text-xl">Get In Touch</span>
      <form>
        <div className="flex flex-col mt-5">
          <input
            className="p-3 bg-beige rounded-md mb-2"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
          />
          <input
            className="p-3 bg-beige rounded-md mb-2"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-3 bg-beige rounded-md mb-2"
            type="email"
            placeholder="Email"
            value={formData.email}
          />
          <input
            className="p-3 bg-beige rounded-md mb-2"
            type="number"
            placeholder="Phone Number"
            value={formData.phoneNumber}
          />
        </div>
        <div>
          <textarea
            className="w-full h-52 p-3 bg-beige rounded-md mb-2"
            placeholder="Type your message here"
            value={formData.emailBody}
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
