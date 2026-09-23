import Image from "next/image";
import footerLogo from '@/app/assets/Brand Logo Left.png'

const Footer = () => {
    return (
        <footer className="bg-[#090A0D]">
            <div className="w-11/12 mx-auto flex justify-between items-center">
            <div className=" py-7 ">
                <Image alt="footer-logo" width={100} height={100} src={footerLogo}></Image>
            </div>

            <ul className="flex text-[#6B7280] font-semibold">
                <li>© 2026 FitLog </li>
                <li> — Workout Library.</li>
                <li>Train hard,</li>
                <li>log honest.</li>
            </ul>
            </div>
        </footer>
    );
};

export default Footer;