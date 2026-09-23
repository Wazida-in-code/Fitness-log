'use client'
import Image from 'next/image';
import logo from '@/app/assets/logo.png'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    return (
        <div className=' bg-[#000000]'>
        <nav className='flex justify-between w-11/12 mx-auto py-5'>
            <div className='flex py-4 gap-2'> 
                <Image alt='logo' src={logo}></Image>
                <h2 className='font-bold text-2xl text-white'>FITLOG</h2>
            </div>

            <div className='hidden md:flex items-center gap-3'>
                <Link href="/" className={`${pathName === "/" ? 'bg-[#1A2312] text-[#C2F800] font-bold rounded-4xl px-4 py-2': 'text-[#9CA3AF]'} `}>
                    Workouts
                </Link>
                <Link href="/myPlan" className={`${pathName === "/myPlan" ? 'bg-[#1A2312] text-[#C2F800] font-bold rounded-4xl px-4 py-2': 'text-[#9CA3AF]'} `}>
                    My Plan
                </Link>
            </div>
            <div className='hidden md:flex gap-4 items-center'>
                <Link href="/myPlan" className='text-[#D1D5DB]'>Plan</Link>
                <Link href="/myPlan" className='text-[#9CA3AF]'>Saved</Link>
            </div>
            <GiHamburgerMenu className='md:hidden text-white mt-5' />
        </nav>
        </div>
    );
};

export default Navbar;