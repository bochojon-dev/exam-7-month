import React from "react";
import "../footer/Footer.css";
import logo from "@/assets/logo.svg";
import facebook from "@/assets/facebook.svg";
import twitter from "@/assets/twitter.svg";
import footerIcon1 from "@/assets/footer-icon1.svg";
import footerIcon2 from "@/assets/footer-icon2.svg";
import footerIcon3 from "@/assets/footer-icon3.svg";
import footerIcon4 from "@/assets/footer-icon4.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_contents">
          <div className="footer_top">
            <ul>
              <li>
                <div className="footer_logo">
                  <Image alt="logo" width={40} height={40} src={logo} />
                  <h4>E-Comm</h4>
                </div>
                <p className="with_icon1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever.Since the 1500s, when an unknown
                  printer.
                </p>
              </li>
              <li>
                <h3>Follow Us</h3>
                <p className="with_icon">
                  Since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </p>
                <div className="social_medias">
                  <Image alt="facebook" width={7} height={14} src={facebook} />
                  <Image alt="facebook" width={14} height={11} src={twitter} />
                </div>
              </li>
              <li>
                <h3>Contact Us</h3>
                <p className="with_icon">
                  E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <h3>Information</h3>
                <p>About Us Infomation Privacy Policy Terms & Conditions</p>
              </li>
              <li>
                <h3>Service</h3>
                <p>About Us Infomation Privacy Policy Terms & Conditions</p>
              </li>
              <li>
                <h3>My Account</h3>
                <p>About Us Infomation Privacy Policy Terms & Conditions</p>
              </li>
              <li>
                <h3>Our Offers</h3>
                <p>About Us Infomation Privacy Policy Terms & Conditions</p>
              </li>
            </ul>
          </div>
          <div className="footer_bottom">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="payment">
              <Image alt="payment" width={40} height={24} src={footerIcon1} />
              <Image alt="payment" width={40} height={24} src={footerIcon2} />
              <Image alt="payment" width={40} height={24} src={footerIcon3} />
              <Image alt="payment" width={40} height={24} src={footerIcon4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
