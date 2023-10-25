import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart";

const ProductCard = ({ image, title, price, rating, id }) => {
  const dispatch = useDispatch({});

  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  duration-300">
      <img className='w-[245px] h-[290px] mx-auto pb-6' src={image} alt="image" />
      <h1 className='font-bold text-sm text-center pb-2'>{title}.</h1>
      <p className='text-sm  text-center'>Price:{price}$</p>
      <h1 className='text-sm text-center pb-2'>Rating:{rating}/5</h1>
      <div className="flex justify-center items-center gap-3">
        <button
          className='text-white w-[200px] mx-auto rounded-md  my-6 font-medium py-3 px-6 bg-black'
          onClick={() => {
            dispatch(addToCart({ image, title, qty: 1, price, rating, id }));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
