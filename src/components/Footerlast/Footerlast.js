import React from "react";
import { Link } from "react-router-dom";
const Footerlast = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs px-48 ">
        <div>
          <ul>
            <li>
              <Link to="#" className="hover:underline">
                AbeBokos
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Books,art & collectibles
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Shopbop
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Designer
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Fashion Brands
              </Link>
            </li>
          </ul>
        </div>

        {/* 2nd row */}
        <div>
          <ul>
            <li>
              <Link to="#" className="hover:underline">
                Amazon Web Services
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Scalable Cloud
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Computing Services
              </Link>
            </li>
            <br />
            <li>
              <Link to="#" className="hover:underline">
                Amazon Business
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Everything For Your Business
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd row */}
        <div>
          <ul>
            <li>
              <Link to="#" className="hover:underline">
                Audible
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Download
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                AudioBoks
              </Link>
            </li>
            <br />
            <li>
              <Link to="#" className="hover:underline">
                Prime Now
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                2-Hour Delivery on Everyday Items
              </Link>
            </li>
          </ul>
        </div>

        {/* 4th row */}
        <div>
          <ul>
            <li>
              <Link to="#" className="hover:underline">
                IMDb
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Movies,Tv & Celebrities
              </Link>
            </li>
            <br />
            <li>
              <Link to="#" className="hover:underline">
                Amazon Prime Music
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                100 million songs, ad-free
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Over 15 million podcast episodes
              </Link>
            </li>
          </ul>

          <br />
        </div>
        </div>
        
        <div className="flex justify-center items-center py-4  ">
          <Link to="#" className="hover:underline mx-4">
            Conditions of Use & Sale
          </Link>
          <Link to="#" className="hover:underline mx-4">
            Privacy Notice
          </Link>
          <Link to="#" className="hover:underline mx-4">
            Interest-Based Ads
          </Link>
          
          <Link to="#" className="hover:underline mx-4">
            @ 1996-2025,Amazon.com,Inc.or its affiliates
          </Link>
        </div>
     

      
    </footer>
  );
};

export default Footerlast;
