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
    const [search, setSearch] = useState("");

    const categories = ["All", "Science", "Tech", "Mystery", "Fiction", "Fantasy", "Classic"];

    const filteredBooks = data
        .filter((book) => {
            if (filter === "All") return true;
            return book.category === filter;
        })
        .filter((book) => {
            return (book.bookName || "")
                .toLowerCase()
                .includes(search.toLowerCase());
        });

    return (
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <h1 className="col-span-1 text-2xl font-bold mb-3">All Books</h1>
                <div className="join col-span-3">
                    <input type="text"
                        placeholder="Search books by book Name..."
                        className="input join-item input-bordered w-full mb-4"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn join-item btn-secondary">Search</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

             
                <div className="col-span-1">
                    <ul className="flex flex-col rounded-2xl shadow-2xl p-3 space-y-2 text-center">
                        <li className="text-left font-semibold text-2xl">
                            All Categories
                        </li>

                        {categories.map((cat, ind) => (
                            <li
                                key={ind}
                                onClick={() => setFilter(cat)}
                                className={`btn rounded-3xl ${filter === cat && "bg-secondary text-white"
                                    }`}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map((book) => (
                            <BooksCard key={book.bookId} book={book} />
                        ))
                    ) : (
                        <p className="text-red-500">No books found</p>
                    )}
                </div>

                <div className="col-span-1 flex flex-col space-y-5">
                    <Image src={add1} alt="" />
                    <Image src={add3} alt="" />
                    <Image src={add2} alt="" />
                    <Image src={add4} alt="" />
                </div>

            </div>
        </div>
    );
};

export default FilterBooks;