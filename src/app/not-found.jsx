"use client";

import Link from "next/link";


const Notfound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4 text-center">

            <h1 className="text-5xl font-bold text-error">
                404 - Page Not Found
            </h1>

            <p className="mt-4 text-gray-500 max-w-md">
                The page you are looking for doesnt exist or has been moved.
                Please check the go back to home.
            </p>


            <Link href="/">
                <button className="btn btn-primary mt-6">
                    Go Home
                </button>
            </Link>
        </div>
    );

};

export default Notfound;
    