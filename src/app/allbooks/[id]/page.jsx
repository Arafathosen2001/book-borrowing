
import BorrowButton from '@/app/Component/BorrowButton';
import { AllBoodsData } from '@/data/fetchData';
import React from 'react';

const BookDetiels = async ({ params }) => {
    
    const { id } = await params
    const data = await AllBoodsData(id);
    console.log(data)
    const book = data.find(book => book.bookId == id);
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
                <div className="col-span-2">
                    <h2 className="font-bold text-3xl">{bookName}</h2>
                    <p className="font-semibold text-xl">By: {author}</p>
                    <p>{review}</p>
                    <div className=" mt-20">
                        <BorrowButton></BorrowButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetiels;