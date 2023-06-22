import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    emailBody: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="m-5">
      <span className="text-xl">Get In Touch</span>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mt-5">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            className="w-full h-52 p-3 bg-beige rounded-md mb-2 shadow-md shadow-slate-600"
            placeholder="Type your message here"
            name="emailBody"
            value={formData.emailBody}
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
