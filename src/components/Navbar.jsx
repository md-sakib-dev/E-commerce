import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  const length = cartItems?.cartItems?.length;

  return (
    <div className="sticky top-0  bg-black p-5 ">
      <div className=" text-white font-bold text-2xl flex justify-between items-center z-10 ">
        <Link to="/">
          {" "}
          <h1>Home</h1>{" "}
        </Link>
        <div className="flex justify-center gap-2 items-center">
          <Link to="/profile"
          
          ><MdAccountCircle/></Link>
          <Link to="/cart">
            
            <AiOutlineShoppingCart />
          </Link>
          <p>{length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
