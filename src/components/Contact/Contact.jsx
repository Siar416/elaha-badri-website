const Contact = () => {
  return (
    <section className="m-5">
      <span className="text-xl">Get In Touch</span>
      <form>
        <div className="flex flex-col mt-5">
          <input
            className="p-3 bg-green rounded-md text-white placeholder:text-white mb-2"
            type="text"
            placeholder="First Name"
          />
          <input
            className="p-3 bg-green rounded-md text-white placeholder:text-white mb-2"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="flex flex-col">
          <input
            className="p-3 bg-green rounded-md text-white placeholder:text-white mb-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-3 bg-green rounded-md text-white placeholder:text-white mb-2"
            type="number"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type your message here"
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default Contact;
