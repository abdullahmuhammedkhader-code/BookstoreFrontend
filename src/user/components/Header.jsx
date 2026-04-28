import React, { useEffect, useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaPowerOff, FaUser } from "react-icons/fa";
import { FaGear, FaXTwitter } from "react-icons/fa6";
import { Link, Links } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");
  const [userId , setUserId] = useState("")
  const [dropDown,setDropDown] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token");
      const user = JSON.parse(sessionStorage.getItem("user"));
      setToken(userToken);
      setDp(user?.picture);
      setUserId(user?.id)
      console.log(token);
    }
  }, [token]);
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        <div className="flex items-center">
          <img
            width={"50px"}
            height={"50px"}
            src="https://cdn-icons-png.flaticon.com/512/8832/8832880.png"
            alt="Logo"
          />
          <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
        </div>
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        <div className="md:flex items-center justify-end hidden ">
          <FaInstagram className=" text-2xl" />
          <FaFacebook className="mx-2 text-2xl" />
          <FaXTwitter className=" text-2xl" />
          <Link
            to={"/login"}
            className="border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white"
          >
            <FaUser className="me-1" />
            Login
          </Link>
        </div>
      </div>
      <nav className="bg-black w-full p-3 text-white md:flex justify-center items-center">
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            <FaBars />
          </button>
          {!token ? (
            <Link
              to={"/login"}
              className="border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white"
            >
              <FaUser className="me-1" /> Login
            </Link>
          ) : (
            <div>
              {/* profile icon */}
              <button onClick={()=>setDropDown(!dropDown)} className="shadow-sm rounded ms-5 p-1 hover:bg-gray-100">
                <img
                  width={"40px"}
                  height={"40px"}
                  style={{ borderRadius: "50%" }}
                  src={
                    dp == ""
                      ? "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                      : dp
                  }
                  alt="profile icon"
                />
              </button>

              {/* dropdown menu */}
              {
                dropDown &&
                <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                 <Links to={`/profile/${userId}`} className="flex items-center text-sm px-3 py-2 text-gray-600"><FaGear className="me-1" /> Profile</Links>
                 <button className="flex items-center text-gray-600 text-sm px-3 py-2 "><FaPowerOff className="me-1" />Logout</button>
              </div>
              }
            </div>
          )}
        </div>
        <ul className={toggle ? "flex flex-col" : "md:flex hidden"}>
          <li>
            <Link to={"/"} className="md:mx-4 mt-2 md:mt-0">
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/books"} className="md:mx-4 mt-2 md:mt-0">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="md:mx-4 mt-2 md:mt-0">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;