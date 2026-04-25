import React from "react";

function Purchase() {
  return (
    <div>
      <div className="p-10 my-15 shadow rounded">
        <div className="p-5 rounded mt-4 bg-gray-100">
          <div className="md:grid grid-cols-[3fr_1fr]">
            <div className="px-4">
              <h1 className="text-2xl">Title</h1>
              <h1 className="text-xl">Author</h1>
              <h1 className="text-lg text-blue-500">$ discount price</h1>
              <p className="text-justify">abstract</p>
              <div className="flex mt-3">
                <img
                  width={"120px"}
                  height={"120px"}
                  src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png"
                  alt=""
                />
              </div>
            </div>
            <div className="px-4 mt-4 md:mt-0">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555052952i/35170836.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;