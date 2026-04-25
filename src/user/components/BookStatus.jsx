import React from "react";

function BookStatus() {
  return (
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
                src="https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-under-review-reviewing-png-image_9940487.png"
                alt=""
              />
              <img
                width={"120px"}
                height={"120px"}
                src="https://png.pngtree.com/png-vector/20230604/ourmid/pngtree-approved-stamp-with-green-color-vector-png-image_7120039.png"
                alt=""
              />
              <img
                width={"120px"}
                height={"120px"}
                src="https://png.pngtree.com/png-vector/20241113/ourmid/pngtree-circle-sold-red-stamp-with-texture-vector-png-image_14271329.png"
                alt=""
              />
            </div>
          </div>
          <div className="px-4 mt-4 md:mt-0">
            <img
              src="https://m.media-amazon.com/images/I/81BuCz96-nL._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="w-100"
            />
            <div className="mt-4 flex justify-end">
              <button className="bg-red-600 text-white p-2 rounded">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookStatus;