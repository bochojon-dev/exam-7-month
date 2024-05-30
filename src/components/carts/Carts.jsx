"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

// import img from "../../assets/images/cart.jpg";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "@/lib/slice/cartSlice";
import Link from "next/link";
import Image from "next/image";
// import { toast } from "react-toastify";

const Carts = () => {
  let data = useSelector((s) => s.cart.value);
  let dispatch = useDispatch();
  let total = data?.reduce(
    (acc, el) => acc + Math.round(el.price) * el.soni,
    0
  );

  return (
    <>
      <div className="container">
        <div className="url">
          <Link href={"/"}>Home</Link>/
          <Link href={"/product-checkout"}>Shop</Link>
          <Link href={"/cart"}>Shopping Cart</Link>
        </div>
        {data.length ? (
          <div className="cart__content">
            <table>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              {data?.map((el) => (
                <tr className="cart__item" key={el.id}>
                  <td>
                    <Image
                      width={100}
                      height={100}
                      src={el?.image}
                      alt={el.title}
                    />
                    <h4 className="title" title={el?.title}>
                      {el?.title}
                    </h4>
                  </td>
                  <td className="price"> $ {Math.round(el?.price)}</td>
                  <td>
                    <button
                      disabled={el.soni <= 1}
                      onClick={() => dispatch(decrementCartQuantity(el))}
                    >
                      -
                    </button>
                    <span>{el.soni}</span>
                    <button
                      disabled={el.soni >= 10}
                      onClick={() => dispatch(incrementCartQuantity(el))}
                    >
                      +
                    </button>
                  </td>
                  <td className="total">
                    $ {Math.round(el?.price) * el?.soni}
                  </td>
                  <td>
                    <button
                      className="delete"
                      onClick={() => dispatch(removeItemFromCart(el))}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
            {/* <div className="cart__total">
              <h4 className="title">Cart Totals</h4>
              <p>Coupon Apply</p>
              <form onSubmit={handleSubmit}>
                <input
                  value={cupon}
                  onChange={(e) => setCupon(e.target.value)}
                  placeholder="Enter coupon code here..."
                  type="text"
                  required
                />
                <button>Apply</button>
              </form>
              <div>
                <p>Subtotal</p>
                <span>$ {total.toFixed(2)}</span>
              </div>
              <div>
                <p>Coupon Discount</p>
                <span>(-) 00.00</span>
              </div>
              <div>
                <p>Shiping</p>
                <span>$16.00</span>
              </div>
              <div className="total">
                <h4>Total</h4>
                <span>$ {totalCupon || total.toFixed(2)}</span>
              </div>
              <button className="check">Proceed To Checkout</button>
            </div> */}
          </div>
        ) : (
          <>
            {/* <img style={{ width: "100%" }} src={img} alt="" /> */}
            <Link className="go__home" href={"/"}>
              <button>Goo Home</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Carts;
