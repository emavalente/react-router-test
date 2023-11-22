import { Link } from "react-router-dom";
import logo from "../assets/img/react-router-svgrepo-com.svg";

const Navbar = () => {
  return (
    <nav className="w-full h-[80px] px-8 fixed flex gap-8 justify-center items-center text-white text-xl bg-slate-900 shadow-md">
      <div className="w-24 ">
        <img src={logo} alt="react router logo" />
      </div>
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
