import React from "react";
import bannerPic from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero my-10 bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <img
          src={bannerPic}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">

            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-primary my-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
