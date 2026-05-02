import { AllBoodsData } from '@/data/fetchData';
import React from 'react';
import BooksCard from '../Component/BooksCard';

const AllBookPage = async () => {
    const data = await AllBoodsData();
    return (
        <div className='container'>
            <h1>All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((book) => (
                    <BooksCard key={book.bookId} book={book}></BooksCard>))
                }
            </div>
            
        </div>
    );
};

export default AllBookPage;