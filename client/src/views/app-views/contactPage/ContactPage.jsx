import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Querey
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your querey"
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Email
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p>
            <span className="font-bold">Phone:</span> +91-8670510842
          </p>
          <p>
            <span className="font-bold">Email:</span> mdamir0842@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Our Address</h2>
        <p>
          Burnpur 713325, Asansol W.B. INDIA
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
