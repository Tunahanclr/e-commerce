import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);
  console.log(productDetail, "productDetail");
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail.id,
        title: productDetail.title,
        image: productDetail.image,
        quantity: quantity,
        price: productDetail.price,
      })
    );
      setQuantity(quantity+1)

  };
  return (
    <div className="flex md:flex-row gap-10 my-20 flex-col mx-auto items-center">
      <img
        className="w-[500px] h-500px object-cover"
        src={productDetail.image}
        alt=""
      />
      <div className="">
        <p className="font-bold text-2xl md:text-4xl">{productDetail.title}</p>
        <div className="mt-3">
          <p className="my-2 text-base md:text-lg">
            {productDetail.description}
          </p>
        </div>
        <div>
          <div className="my-2 flex items-center   gap-2 mt-4">
            <p className=" text-5xl font-extrabold">{productDetail.price}</p>
            <span className="text-lg ">$</span>
          </div>
          <div className="flex gap-3 mt-3 items-center cursor-pointer">
            <div
              onClick={decrement}
              className="text-3xl cursor-pointer font-semibold"
            >
              -
            </div>
            <span className="w-5  text-3xl font-semibold ">{quantity} </span>
            <div
              onClick={increment}
              className="text-3xl  cursor-pointer font-semibold"
            >
              +
            </div>
          </div>
          <button
            onClick={addBasket}
            className="bg-gray-300 hover:bg-gray-400 transition-all mt-4 w-40 h-16 rounded-md"
          >
            <span onClick={increment}>
            Sepete Ekle
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
