import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  deleteHandler,
  totalPrice,
} from "../redux/features/cart";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPrice());
  }, [cart.subTotal, cart.cartItems]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" container mx-auto flex ">
      <div className="flex ">
        <div className="flex  w-[85%]">
          {cart.cartItems?.length > 0 ? (
            <div className=" mt-10 ">
              {cart.cartItems.map((i, index) => {
                return (
                  <div key={index} className="flex flex-col gap-4 mt-10">
                    <div>
                      <div className="  flex justify-center gap-10 items-center">
                        <p className="font-semibold">Product No: {index + 1}</p>
                        <img className=" w-44 h-52" src={i.image} />

                        <p className=" w-36">{i.title}</p>

                        <button
                          className="font-bold text-2xl"
                          onClick={() => {
                            dispatch(increment(i));
                          }}
                        >
                          +
                        </button>
                        <p className=" w-10">{i.qty}</p>
                        <button
                          className="font-bold text-3xl "
                          onClick={() => {
                            dispatch(decrement(i));
                          }}
                        >
                          {" "}
                          -{" "}
                        </button>

                        <h1 className=" w-20 flex justify-center items-center">
                          {Number((i.qty * i.price).toFixed(1))}$
                        </h1>
                        <button
                          onClick={() => {
                            dispatch(deleteHandler(i));
                          }}
                        >
                          <AiFillDelete size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" text-3xl font-bold">
              <h1>No Items Here</h1>
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-4 fixed top-60 right-96">
          <h1 className="font-semibold text-2xl">
            Sub Total:{Number((cart?.subTotal).toFixed(1))}$
          </h1>
          <h1 className="font-semibold text-2xl">
            Shiping:{Number(cart.shipment.toFixed(1))}$
          </h1>
          <h1 className="font-semibold text-2xl">
            Tax: {Number(cart.tax.toFixed(1))}$
          </h1>
          <h1 className="font-bold text-3xl">
            Total:{Number(cart.total.toFixed(1))}$
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
