"use client";
import { useState } from "react";
import BooksCard from "./BooksCard";
import Image from "next/image";
import add1 from "../../assaest/banner11.png";
import add2 from "../../assaest/banner21.png";
import add3 from "../../assaest/banner31.png";
import add4 from "../../assaest/banner41.png";

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
                    <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {filteredBooks.map((book) => (
                            <BooksCard key={book.bookId} book={book}></BooksCard>))
                        }
                    </div>
                    <div className="col-span-1 flex flex-col space-y-5">
                        <div className=""><Image src={add1} alt="" /></div>
                        <div className=""><Image src={add3} alt="" /></div>
                        <div className=""><Image src={add2} alt="" /></div>
                        <div className=""><Image src={add4} alt="" /></div>
                    </div>
                </div>
            </div>
       
    );
};

export default FilterBooks;