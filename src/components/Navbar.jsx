import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">
          Real state Company
        </Link>

        <div className="flex space-x-6 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 font-medium ${
                  isActive ? "border-b-2 border-blue-600" : ""
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;