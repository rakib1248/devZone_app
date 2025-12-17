import { FaUser, FaYoutube } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Topbar = () => {
  return (
    <>
      <div className="bg-[#232323] my-2">
        <div className="container m-auto text-white flex justify-evenly items-center">
          <div className="flex gap-5">
            <div className="text-[#aeadad] hover:text-white transition-all flex items-center gap-2">
              <span className=" text-[#E64866]">
                <FaPhoneFlip />
              </span>
              +880 1818 3031 04 (whatsapp)
            </div>
            <div className="text-cyan-50">|</div>
            <div className="text-[#aeadad] hover:text-white transition-all flex items-center gap-2">
              <span className="text-2xl text-[#E64866]">
                <IoIosMail />
              </span>
              info@devzone.com.bd
            </div>
          </div>
          <div className="flex gap-5">
            <button className="cursor-pointer bg-[#6D415C] py-3 px-6 hover:bg-[#E64866] mr-5 flex items-center gap-2">
              <span>
                <FaUser />
              </span>
              Login/Registration
            </button>
            <button className="cursor-pointer bg-[#E64866] py-3 px-6 hover:bg-[#6D415C] flex items-center gap-2">
              <span className="text-2xl">
                <FaYoutube />
              </span>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
