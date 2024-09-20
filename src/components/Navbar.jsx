import logo from "../assets/johnylogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yohannes-tarekegn-11ab91287" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yojoman4" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/Konig4" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://www.instagram.com/jony.new4" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
