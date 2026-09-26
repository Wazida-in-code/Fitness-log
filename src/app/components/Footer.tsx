import Image from "next/image";
import footerLogo from "@/app/assets/Brand Logo Left.png";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D]">
      <div className="mx-auto flex w-11/12 flex-col items-center justify-between gap-4 py-6 sm:py-7 md:flex-row md:gap-6">
        
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src={footerLogo}
            alt="FitLog logo"
            width={100}
            height={100}
            className="w-[85px] sm:w-[100px]"
          />
        </div>

        {/* Footer Text */}
        <ul className="flex flex-wrap justify-center text-center text-sm font-semibold text-[#6B7280] sm:text-base md:justify-end md:text-right">
          <li>© 2026 FitLog</li>
          <li>&nbsp;— Workout Library.</li>
          <li>&nbsp;Train hard,</li>
          <li>&nbsp;log honest.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;