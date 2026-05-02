"use client";
import { authClient, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiBookshelf } from 'react-icons/gi';
const NavBar2 = () => {
    const { data: session, status,isPending} = authClient.useSession();
    const users=session?.user;
    return (
        <div className="bg-base-100 shadow-sm">
        <div className="navbar container px-2 lg:px-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                            <li><Link href={'/'} variant="soft" className="outline font-bold flex items-center justify-start text-2xl"><GiBookshelf />Book <span className='text-red-500'>Fair</span></Link></li>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/allbooks'}>All Books</Link></li>
                        
                    </ul>
                    
                </div>
                <div className="flex items-center gap-3 hidden lg:flex">
                    <Link href={'/'} variant="soft" className="outline font-bold flex items-center justify-center text-4xl"><GiBookshelf />Book <span className='text-red-500'>Fair</span></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/allbooks'}>All Books</Link></li>
                   
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="flex items-center md:gap-4 gap-2">
                    {isPending ? (<h1>Loading...</h1>) : (users ? (<><li className='flex items-center justify-center' >Helo ! {users?.name}</li>
                            {<img src={users?.image}
                                width={300}
                                height={400} alt="user" className='h-10 w-10 rounded-full' /> || <CgProfile></CgProfile>}
                            <li><Link className='btn btn-secondary' href={'/profile'}>Profile</Link></li>
                            <li><button className='btn btn-secondary' onClick={async () => await authClient.signOut()}>Log out</button></li>
                        </>) : (<><li><Link className='btn btn-secondary' href={'/login'}>Login</Link></li>
                                <li><Link className='px-1 md:px-4 btn btn-secondary' href={'/signup'}>Sign Up</Link></li></>))

                    }
                </ul>
            </div>
            </div>
        </div>
    );
};

export default NavBar2;