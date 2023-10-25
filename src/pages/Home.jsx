import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allProducts,
  priceListOrder,
  categoryOrder,
  PageSetUp,
} from "../redux/features/home";
import ProductCard from "../components/ProductCard";
import CustomPagination from "../components/CustomPagination";

console.log("Heloo");

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, currentPage, pagePerPost } = useSelector(
    (state) => state.allProducts
  );
  // const [front,setFront] = useState(products)
  const [priceOrder, setPriceOrder] = useState("Default");
  const [itemCategory, setItemCategory] = useState("Default");
  const indexOfLastPost = currentPage * pagePerPost;
  const indexOfFirstPost = indexOfLastPost - pagePerPost;
  const PerPage = products.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(products.length / pagePerPost);
  useEffect(() => {
    dispatch(allProducts());
  }, []);

  useEffect(() => {
    setPriceOrder("Default");
    dispatch(PageSetUp(1));
  }, [itemCategory]);

  const order = ["Default", "High To Low Price", "Low To High Price"];

  const category = [
    "Default",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  const handleChange = (i) => {
    setPriceOrder(i);
  };
  const handleChange1 = (i) => {
    setItemCategory(i);
  };

  return (
    <>
      <div className="  flex justify-end gap-4 mr-28 mt-7  ">
        {order?.map((i, index) => {
          return (
            <button
              key={index}
              className={
                priceOrder === i
                  ? "text-red-700 font-semibold"
                  : "text-black font-semibold"
              }
              onClick={() => {
                dispatch(priceListOrder(i));
                handleChange(i);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <div className="">
      <div className="border border-black flex flex-col w-40  mt-32 ml-10 justify-center items-center gap-6">
        {category.map((i, index) => {
          return (
            <div
              className={
                itemCategory === i
                  ? "font-semibold text-red-700"
                  : "font-semibold text-black"
              }
              key={index}
            >
              <button
                onClick={() => {
                  handleChange1(i);
                  dispatch(categoryOrder(i));
                }}
              >
                {i}
              </button>
            </div>
          );
        })}
      </div>
      <div className=" mt-3">
        <div>
          {loading ? (
            <div className="flex justify-center items-center">Loading</div>
          ) : (
            <div className=" ml-60 w-[] h-5/6  grid grid-cols-3 gap-4 -mt-72">
              {PerPage.map((i, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={i.id}
                      image={i.image}
                      title={i.title}
                      price={i.price}
                      rating={i.rating?.rate}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      </div>
      
      <div className=" flex justify-center items-center mt-4">
        <CustomPagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default Home;
