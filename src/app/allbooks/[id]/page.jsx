
import BorrowButton from '@/app/Component/BorrowButton';
import { AllBoodsData } from '@/data/fetchData';
import React from 'react';

const BookDetiels = async ({ params }) => {
    
    const { id } = await params
    const data = await AllBoodsData(id);
    // console.log(data)
    const book = data.find(book => book.bookId == id);
    if (!book) {
        return <p>Book not found</p>;
    }
    const { bookName, review, image, author, totalPages, rating, available_quantity, category, publisher, yearOfPublishing } = book;
   
    return (
        <div className="py-20 px-3">
            <div className="container grid grid-cols-2 md:grid-cols-4 border rounded-3xl shadow-2xl py-5">
                <div className="col-span-2">
                    <img
                        className="w-96 mx-auto rounded-3xl"
                        src={image}
                        alt="Album"
                    />
                </div>
                <div className="col-span-2 space-y-2">
                    <h2 className="font-bold text-3xl">{bookName}</h2>
                    <p className="font-semibold text-xl">Author: {author}</p>
                    <p>{review}</p>
                    <h1 className='font-bold text-3xl border'>Others information</h1>
                    <p className='font-semibold text-2xl'>TotalPages: <span className='text-secondary'>{totalPages}</span></p>
                    <p className='font-semibold text-2xl'>Category <span className='text-secondary'>{category}</span></p>
                    <p className='font-semibold text-2xl'>Rating <span className='text-secondary'>{rating}</span></p>
                    <p className='font-semibold text-2xl'>Publisher <span className='text-secondary'>{publisher}</span></p>
                    <p className='font-semibold text-2xl'>YearOfPublishing <span className='text-secondary'>{yearOfPublishing}</span></p>
                    <div className=" mt-20 flex flex-col md:flex-col lg:flex-row justify-between items-center p-10 gap-3">
                        <p className='font-semibold text-sm md:text-2xl btn'>Available Quantity <span className='text-secondary'>{available_quantity}</span></p>
                        <BorrowButton></BorrowButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetiels;