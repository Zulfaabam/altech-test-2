import { useState } from "react";

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal = ({ closeModal }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-xs md:max-w-sm w-full relative z-10">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#396cf0]"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#396cf0]"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#396cf0] text-white font-bold py-2 px-4 rounded-md hover:bg-[#5b76ea]"
            >
              Login
            </button>
          </form>
          <button
            onClick={closeModal}
            className="absolute top-0 right-2 text-gray-400 hover:text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
