import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="overflow-hidden">
          <img
            src={item.image}
            alt="Book"
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg">
            {item.name}
            <div className="badge badge-secondary ml-2">{item.category}</div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline text-sm">${item.price}</div>
            <div className="cursor-pointer px-3 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-sm">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
