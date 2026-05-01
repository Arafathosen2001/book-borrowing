"use client";
import { authClient, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { GiBookshelf } from 'react-icons/gi';

const NavBar = () => {
    const { data: session, status,isPending} = authClient.useSession();
    const users=session?.user;
    // console.log(users, isPending)
    return (
        <nav className=" sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="container flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href={'/'} variant="soft" className="outline font-bold flex items-center justify-center text-4xl"><GiBookshelf />Book <span className='text-red-500'>Fair</span></Link>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/allbooks'}>All Books</Link></li>
                </ul>
                <ul className="flex items-center gap-4">
                    {isPending ? (<h1>Loading...</h1>) : (users ? (<><li className='flex items-center justify-center' >Helo ! {users?.name}</li>
                        <img src={users?.image}
                            width={300}
                            height={400} alt="user" className='h-10 w-10 rounded-full' />
                        <li><Link className='btn' href={'/profile'}>Profile</Link></li>
                        <li><button className='btn' onClick={async()=>await authClient.signOut()}>Log out</button></li>
                    </>) : (<><li><Link className='btn' href={'/login'}>Login</Link></li>
                        <li><Link className='btn' href={'/signup'}>Sign Up</Link></li></>))
                    
                    }
                </ul>
            </header>
        </nav>
    );
};

export default NavBar;