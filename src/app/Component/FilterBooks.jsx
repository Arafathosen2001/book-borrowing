"use client";

import { useState } from "react";
import BooksCard from "./BooksCard";

const FilterBooks = ({ data }) => {
    const [filter, setFilter] = useState("All");

    const filteredBooks =
        filter === "All"
            ? data
            : data.filter((book) => book.category === filter);

    return (
        <div className="">
                <h1>All Books</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="col-span-1">
                        <ul className="flex flex-col rounded-2xl shadow-2xl p-3 space-y-2 text-center">
                            <li className="text-left font-semibold text-2xl">All Categories</li>

                            <li onClick={() => setFilter("All")}     className="btn bg-secondary rounded-3xl">All</li>
                            <li onClick={() => setFilter("Science")} className="btn bg-secondary rounded-3xl">Science</li>
                            <li onClick={() => setFilter("Tech")}    className="btn bg-secondary rounded-3xl">Tech</li>
                            <li onClick={() => setFilter("Mystery")} className="btn bg-secondary rounded-3xl">Mystery</li>
                            <li onClick={() => setFilter("Fiction")} className="btn bg-secondary rounded-3xl">Fiction</li>
                            <li onClick={() => setFilter("Fantasy")} className="btn bg-secondary rounded-3xl">Fantasy</li>
                            <li onClick={() => setFilter("Classic")} className="btn bg-secondary rounded-3xl">Classic</li>
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