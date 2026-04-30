import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiBookshelf } from 'react-icons/gi';

const NavBar = () => {
    return (
        <nav className=" sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="container flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href={'/'} variant="soft" className="outline font-bold flex items-center justify-center text-4xl"><GiBookshelf />Book <span className='text-red-500'>Fair</span></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="#">Features</Link></li>
                    <li><Link href="#">Pricing</Link></li>
                </ul>
                <ul className="flex items-center gap-4">
                    
                    <li className='flex items-center justify-center' >Helo<CgProfile /></li>
                    <li><Link className='btn' href={'/login'}>Login</Link></li>
                    <li><Link className='btn' href={'/signup'}>Sign Up</Link></li>
                </ul>
            </header>
        </nav>
    );
};

export default NavBar;