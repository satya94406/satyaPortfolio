import { useState } from "react";

const Contact_Form = () => {
  const [form_data, setForm_data] = useState({
    Name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit_Form = (e) => {
    e.preventDefault();
    console.log(form_data);
    alert("Form Submitted");
  };

  return (
    <form
      className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl mx-auto text-gray-800"
      onSubmit={handleSubmit_Form}
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Get in Touch
      </h2>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Name</label>
        <input
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="text"
          onChange={handleChange}
          name="Name"
          placeholder="Full Name"
          required
          value={form_data.Name}
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Email</label>
        <input
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          required
          value={form_data.email}
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Message</label>
        <textarea
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Your Message"
          onChange={handleChange}
          name="message"
          required
          value={form_data.message}
          rows="5"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition shadow-md w-full"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contact_Form;
