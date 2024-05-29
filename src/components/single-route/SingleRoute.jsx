"use client";
import "../single-route/SingleRoute.css";
import Image from "next/image";
import rating from "@/assets/rating.svg";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Radio from "@mui/material/Radio";
import { Pagination, Autoplay } from "swiper/modules";
import hero3 from "@/assets/hero3.png";
import hero2 from "@/assets/hero2.png";
import hero1 from "@/assets/hero1.png";
import Facebook from "@/assets/facebook-white.svg";
import Twitter from "@/assets/twitter-white.svg";
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";

const SingleRoute = ({ datum }) => {
  const [count, setCount] = useState(0);

  const [selectedValue, setSelectedValue] = React.useState("a");
  // swiper va colors MUI dan olingan
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="single">
      <div className="container">
        <div className="single_contents">
          <aside>
            <div className="aside">
              <div className="images">
                <div className="img">
                  <Image
                    alt="product"
                    width={400}
                    height={350}
                    src={datum.image}
                  />
                </div>
                <div className="others">
                  <Image
                    alt="product"
                    width={85}
                    height={85}
                    src={datum.image}
                  />
                  <Image
                    alt="product"
                    width={85}
                    height={85}
                    src={datum.image}
                  />
                  <Image
                    alt="product"
                    width={85}
                    height={85}
                    src={datum.image}
                  />
                  <Image
                    alt="product"
                    width={85}
                    height={85}
                    src={datum.image}
                  />
                </div>
              </div>
              <div className="desc">
                <div className="aside_title">
                  <h3 className="product_name"> {datum.title} </h3>
                  <div className="ratings">
                    <Image alt="rating" width={80} height={12} src={rating} />
                    <p>{datum.rating.count} reviews</p>
                    <p>
                      <span>Submit a review</span>
                    </p>
                  </div>
                </div>
                <div className="aside_title">
                  <div className="aside_price">
                    <div className="costs">
                      <h4>${datum.price}</h4>
                      <p>
                        <span>${datum.price * 1.5} </span>
                        24% Off
                      </p>
                    </div>
                    <div className="acces">
                      <ul>
                        <li>Availability</li>
                        <li>Category</li>
                        <li>Free Shipping</li>
                      </ul>
                      <ul>
                        <li>In Stock</li>
                        <li> {datum.category} </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="aside_title sizes">
                  <div className="size">
                    <p>Select Color:</p>
                    <div>
                      <Radio
                        {...controlProps("a")}
                        sx={{
                          color: "red",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                      <Radio
                        {...controlProps("c")}
                        sx={{
                          color: "blue",
                          "&.Mui-checked": {
                            color: "blue",
                          },
                        }}
                      />
                      <Radio
                        {...controlProps("b")}
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />

                      <Radio
                        {...controlProps("e")}
                        sx={{
                          color: "yellow",
                          "&.Mui-checked": {
                            color: "yellow",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="size">
                    <p>Size</p>
                    <select>
                      <option value="XS">XS</option>
                      <option value="XXL">XXL</option>
                      <option value="M">M</option>
                    </select>
                  </div>
                </div>
                <div className="aside_title">
                  <div className="aside_carts">
                    <div className="counter">
                      <button
                        disabled={count <= 0}
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <h5>{count} </h5>
                      <button onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <div className="wish_cart">
                      <button>
                        <IoCartOutline className="wish_cart-img" />
                        Add To Card
                      </button>
                      <button>
                        <IoHeartOutline className="wish_cart-img" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="share">
                  <button>
                    <Image
                      alt="facebook"
                      width={8}
                      height={16}
                      src={Facebook}
                    />
                    Share on Facebook
                  </button>
                  <button>
                    <Image alt="twitter" width={12} height={16} src={Twitter} />
                    Share on Twitter
                  </button>
                </div>
              </div>
            </div>
            <div className="information">
              <div className="info_title">
                <h3>Product Infomation</h3>
                <h3>
                  Rewiews <span>{datum.rating.count} </span>{" "}
                </h3>
                <h3>Another tab</h3>
              </div>
              <div className="info_texts">
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
            </div>
          </aside>
          <div className="bside">
            <h2>BEST SELLER</h2>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swipe">
                  <Image alt="product" width={400} height={350} src={hero1} />
                  <Image alt="rating" width={70} height={10} src={rating} />
                  <p>
                    $499 <span>$599</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe">
                  <Image alt="product" width={400} height={350} src={hero2} />
                  <Image alt="rating" width={70} height={10} src={rating} />
                  <p>
                    $256 <span>$484</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swipe">
                  <Image alt="product" width={400} height={350} src={hero3} />
                  <Image alt="rating" width={70} height={10} src={rating} />
                  <p>
                    $346 <span>$623</span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
