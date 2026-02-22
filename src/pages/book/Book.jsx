import React, { use } from "react";
import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise)
  console.log(singleBook);
  const {
    bookName,
    review,
    publisher,
    author,
    yearOfPublishing,
    totalPages,
    image,
    rating,
    category,
    tags,
    bookId
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-md border rounded-2xl mb-8 p-6">
        <figure className="p-3 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[200px] w-[150px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {publisher}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <IoStarOutline />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
