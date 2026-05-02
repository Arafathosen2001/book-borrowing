import Link from 'next/link';
import React from 'react';

const NavLonk = ({href, children}) => {
    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default NavLonk;