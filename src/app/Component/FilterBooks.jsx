"use client";

import { useState } from "react";
import BooksCard from "./BooksCard";

const FilterBooks = ({ data }) => {
    const [filter, setFilter] = useState("All");

    const filteredBooks =
        filter === "All"
            ? data
            : data.filter((book) => book.category === filter);
    const categories = ["All", "Science", "Tech", "Mystery", "Fiction", "Fantasy", "Classic"];

    return (
        <div className="">
                <h1>All Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <ul className="flex flex-col rounded-2xl shadow-2xl p-3 space-y-2 text-center">
                            <li className="text-left font-semibold text-2xl">All Categories</li>
                        {categories.map((cat,ind) => (
                            <li
                                key={ind}
                                onClick={() => setFilter(cat)}
                                className={`btn rounded-3xl  ${filter === cat && "bg-secondary text-white"
                                    }`}
                            >
                                {cat}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredBooks.map((book) => (
                            <BooksCard key={book.bookId} book={book}></BooksCard>))
                        }
                    </div>
                </div>
            </div>
       
    );
};

export default FilterBooks;