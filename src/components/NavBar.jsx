import { useState } from "react";

const NavBar = () => {
  const [language, setLanguage] = useState("en");

  return (
    <nav className="bg-transparent text-white p-4 flex items-center justify-between mb-5">
      {/* Netflix Logo */}
      <div className="flex-0">
      <h1 className="text-red-600 text-3xl font-bold mt-5">MyFlix</h1>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <div className="relative">
          <select 
            className="bg-black text-white border border-gray-500 px-2 py-1 rounded flex items-center"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        {/* Sign In Button */}
        <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
