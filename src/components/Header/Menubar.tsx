import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../public/logo.png";
import { CiSearch } from "react-icons/ci";
const Menubar = () => {
  return (
    <div className="container mx-auto px-4 py-3 flex flex-wrap justify-evenly items-center">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="">
          <ul className=" flex items-center gap-2 ">
            <li>
              <a
                className="text-lg font-bold p-2 hover:text-[#E64866] transition-all"
                href="#">
                Courses
              </a>
            </li>
            <li>
              <a
                className="text-lg font-bold p-2 hover:text-[#E64866] transition-all"
                href="#">
                <span className="text-white rounded p-1 bg-[#da1136]">
                  Live
                </span>{" "}
                Classes
              </a>
            </li>
            <li>
              <a
                className="text-lg font-bold p-2 hover:text-[#E64866] transition-all"
                href="#">
                Courses
              </a>
            </li>
            <li>
              <a
                className="text-lg font-bold p-2 hover:text-[#E64866] transition-all"
                href="#">
                Courses
              </a>
            </li>
          </ul>
        </div>
        <div className="text-5xl font-light text-[#e9e9e9]">|</div>
        <div className=" flex gap-4">
          <span className="text-2xl text-[#45190c]">
            <CiSearch />
          </span>
          <span className="text-2xl text-[#45190c]">
            <FaShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
