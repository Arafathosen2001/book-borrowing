import Baner from "./Component/Baner";
import Marquee from "react-fast-marquee";
import { AllBoodsData } from "@/data/fetchData";
import BooksCard from "./Component/BooksCard";
import Teame from "./Component/Teame";


export default async function Home() {
  // console.log(books);
  const data = await AllBoodsData();
  // console.log(data);

  return (
    <div className="container">
      <Baner />
      <div className="flex justify-center items-center gap-2 my-4">
        <button className="btn btn-secondary">Our Collection</button>
            <Marquee>
            {data.map((book) => (
              
                <h1 key={book.bookId} className="text-lg font-bold">||{book.bookName}</h1>
              
            ))}
          </Marquee>
      </div>
      <div className="flex justify-center items-center gap-3 my-5">
        {data.slice(0,4).map((book) => (
          <BooksCard key={book.bookId} book={book} ></BooksCard>
        ))}
      </div>
      <Teame></Teame>
      
    </div>
  );
}