import { useState } from "react";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const onValueChange = (fieldName, value) => {
    const updatedFormData = { ...formData, [fieldName]: value };
    setFormData(updatedFormData);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:mimmindula@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      formData.message
    )}%0A%0AFrom:%20${encodeURIComponent(
      formData.name
    )}%20(${encodeURIComponent(formData.email)})`;
    window.location.href = mailtoLink;

    setFormData(initialState);
  };

  return (
    <section>
      <h1 className="text-3xl md:text-4xl text-center md:text-left font-bold my-6">
        Contact me
      </h1>

      <div className="bg-white text-center rounded-xl p-8">
        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:mimmindula@gmail.com">mimmindula@gmail.com</a>
        </p>

        <form onSubmit={onHandleSubmit} className="mt-3 flex flex-col gap-6">
          <input
            required
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => onValueChange("name", e.target.value)}
            className="tex-md bg-backgound rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={(e) => onValueChange("email", e.target.value)}
            className="tex-md bg-backgound rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          />
          <textarea
            required
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => onValueChange("message", e.target.value)}
            className="tex-md bg-backgound rounded-xl px-4 py-3 placeholder-opacity-50 focus:outline-none border w-full"
          />
          <button type="submit" className="bg-primary text-white">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
