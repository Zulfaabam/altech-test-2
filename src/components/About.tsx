import teamImg from "../assets/project_team.svg";

const About = () => {
  return (
    <div id="about" className="py-12 bg-white text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 underline decoration-[#56b6f4] underline-offset-4">
            About Us
          </h2>
          <p className="text-lg mb-4 font-medium">
            We are a dynamic startup committed to providing cutting-edge
            solutions for entrepreneurs. Our ERP-like system simplifies business
            management, helping you focus on growth and success.
          </p>
          <p className="text-lg font-medium">
            Our mission is to empower businesses with tools that streamline
            operations, enhance productivity, and drive profitability. Join us
            on this journey and take your business to new heights.
          </p>
        </div>
        <div className="md:w-1/2 p-6">
          <img src={teamImg} alt="about us" />
        </div>
      </div>
    </div>
  );
};

export default About;
