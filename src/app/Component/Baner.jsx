import React from 'react';
import hero from '../../assaest/hero.png'
import Link from 'next/link';

const Baner = () => {
    return (
        <div
            className="hero min-h-[60vh]"
            style={{
                backgroundImage:
                    `url(${hero.src})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
                    <p className="mb-5">
                        Open a book, open your mind, and explore endless possibilities. Discover the world of literature with our vast collection of books, and let your imagination soar.
                    </p>
                    <Link href={'/allbooks'} className="btn btn-secondary">Browse Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Baner;