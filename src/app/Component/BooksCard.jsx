import Link from 'next/link';
import React from 'react';

const BooksCard = ({book}) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="">
                <img
                    src={book.image}
                    width="200"
                    height="200"
                    alt="Shoes"
                    className="rounded-xl h-48 w-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.bookName }</h2>
                <p>{book.author} </p>
                <div className="card-actions">
                    <a href={`../allbooks/${book.bookId}`} className="btn btn-primary">Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;