import Link from 'next/link';
import React from 'react';
import { GiBookshelf } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className="bg-base-200">
        <footer className="container footer sm:footer-horizontal text-base-content p-10">
            <aside>
                <div className="flex items-center gap-3">
                        <Link href={'/'} variant="soft" className="outline font-bold flex items-center justify-center text-4xl"><GiBookshelf />Book <span className='text-secondary'>Fair</span></Link>
                </div>
                <p>
                    by p-it.com
                    <br />
                    A seamless and modern web application
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;