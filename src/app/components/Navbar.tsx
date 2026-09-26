"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FitContext } from "@/context/FitProvider";

const Navbar = () => {
  const { todayPlan, saveLater } = useContext(FitContext);
  const [isOpen, setIsOpen] = useState(false);

  const DropDownMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathName = usePathname();
  return (
    <div className=" bg-[#000000] border-b border-gray-800">
      <nav className="relative flex justify-between w-11/12 mx-auto py-3">
        <div className="flex py-4 gap-2">
          <Image alt="logo" src={logo}></Image>
          <h2 className="font-bold text-2xl text-white">FITLOG</h2>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className={`${pathName === "/" ? "bg-[#1A2312] text-[#C2F800] font-bold rounded-4xl px-4 py-2" : "text-[#9CA3AF]"} `}
          >
            Workouts
          </Link>
          <Link
            href="/myPlan"
            className={`${pathName === "/myPlan" ? "bg-[#1A2312] text-[#C2F800] font-bold rounded-4xl px-4 py-2" : "text-[#9CA3AF]"} `}
          >
            My Plan
          </Link>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <div>
            <Link href="/myPlan" className="text-[#D1D5DB] mr-2">
              Plan
            </Link>
            <span className="bg-[#C2F800] font-semibold rounded-[50%] py-2 px-4">
              {todayPlan.length}
            </span>
          </div>
          <div>
            <Link href="/myPlan" className="text-[#9CA3AF] mr-2">
              Saved
            </Link>
            <span className="border boreder-[#2D313B] font-semibold text-white rounded-[50%] py-2 px-4">
              {saveLater.length}
            </span>
          </div>
        </div>
        <GiHamburgerMenu onClick={DropDownMenu} className="md:hidden text-white mt-5 text-2xl cursor-pointer" />

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#000000] border-b border-gray-800 md:hidden p-5">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-[#9CA3AF]">
                Workouts
              </Link>

              <Link href="/myPlan" className="text-[#9CA3AF]">
                My Plan
              </Link>

              <Link href="/myPlan" className="text-[#9CA3AF]">
                Plan ({todayPlan.length})
              </Link>

              <Link href="/myPlan" className="text-[#9CA3AF]">
                Saved ({saveLater.length})
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
