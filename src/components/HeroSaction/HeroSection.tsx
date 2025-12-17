import { IoIosArrowRoundForward } from "react-icons/io";
import sir from "../../../public/AshrafulSir.png";
import stu from "../../../public/students.png";
import Image, { Image2 } from "./Image";

const HeroSection = () => {
  return (
    <div className="bg-[#EAF0F2] py-20">
      <div className="flex justify-evenly items-end">
        <div className="flex flex-col gap-8 relative">
          <div className="absolute top-6 box2 right-64 ">
            <Image2 />
          </div>
          <p className="text-6xl font-extrabold mb-5">
            Let's Simplify the <br /> world of
            <span className="text-[#E64866] "> Learning</span>
          </p>
          <p className="font-light">
            Get your professional online <br /> course today
          </p>
          <div className="">
            <button className="bg-[#E64866] flex gap-2.5 items-center text-white py-3 text-2xl rounded px-6">
              Find courses
              <span className="text-3xl">
                <IoIosArrowRoundForward />
              </span>
            </button>
          </div>
        </div>
        <div className="relative ">
          <div className="absolute top-3 box1 ">
            <Image />
          </div>
          <div className="absolute top-36 box2 ">
            <Image2 />
          </div>
          <div className="absolute top-10 left-52 box3 ">
            <Image />
          </div>
          <div className="relative w-[450px ] h-[450px ]">
            <img src={sir} alt="" />
          </div>
          <div className="absolute z-20 bg-white py-8 px-10 rounded-2xl custom bottom-8 shadow-lg">
            <h1 className="font-bold text-lg ">students</h1>
            <div className="flex gap-8 items-center">
              <img src={stu} alt="" />
              <p className="">
                <span className="font-bold text-[#E64866]">3000+</span>
                <br /> Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
