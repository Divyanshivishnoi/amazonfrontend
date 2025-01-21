import React from "react";
import amazonLogo from "../../assests/amazonLogo.png";
import Footerlast from "../Footerlast/Footerlast";
import { Link } from "react-router-dom";
import FooterDropdown from "../FooterDropdown/FooterDropdown";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-36">
        <div>
          <h3 className="font-bold mb-4">Get to Know Us</h3>
          <ul>
            <li>
              <Link href="#" className="hover:underline">
                Amazon Us
              </Link>{" "}
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>{" "}
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Press Releases
              </Link>{" "}
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Amazon Science
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Connect with Us</h3>
          <ul>
            <li>
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Make Money with Us</h3>
          <ul>
            <li>
              <Link href="#" className="hover:underline">
                Sell on Amazon
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sell under Amazon Accelerator
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Protect and build Your Brand
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Amazon Global Selling
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Supply to Amazon
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Fulfilment by Amazon
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Advertise Your Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Amazon Pay on Merchants
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Let Us Help You</h3>
          <ul>
            <li>
              <Link href="#" className="hover:underline">
                Your Account
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Returns Centre
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 text-gray-400 text-sm space-x-10">
        <img src={amazonLogo} alt="Amazon Logo" className="w-24" />
       <FooterDropdown/>
       <button className="hover:border-2 hover:border-white"> 🏳‍🌈 India</button>
      </div>

      <Footerlast />
    </footer>
  );
};

export default Footer;
