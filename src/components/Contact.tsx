const Contact = () => {
  return (
    <div id="contact" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg mb-4">
          Have questions or need support? Get in touch with us!
        </p>
        <div className="contact-details w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-lg">
          <p className="mb-4">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:support@ourstartup.com"
              className="text-blue-600 hover:underline"
            >
              support@erp.com
            </a>
          </p>
          <p className="mb-4">
            <span className="font-bold">Phone:</span>{" "}
            <a href="tel:1234567890" className="text-blue-600 hover:underline">
              (123) 456-7890
            </a>
          </p>
          <p className="mb-4">
            <span className="font-bold">Address:</span> Jalan ERP Startup,
            Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
