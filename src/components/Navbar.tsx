import logo from "../assets/react.svg";

const Navbar = () => {
  const menu = ["about", "pricing", "contact"];

  return (
    <nav className="w-full h-24 flex items-center justify-between px-8 absolute top-0 left-0 right-0 z-10">
      <a href="#" className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-14" />
        <p className="uppercase font-semibold text-white">Home</p>
      </a>
      <div className="flex items-center gap-8">
        {menu.map((m) => (
          <a key={m} href={`#${m}`} className="uppercase font-semibold">
            {m}
          </a>
        ))}
        <button className="border border-blue-400 w-32 py-1 rounded-lg text-blue-400 uppercase font-medium">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
