import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className=" flex text-xl items-center font-bold text-green-500 hover:text-green-400 cursor-pointer">
          <div className="mr-1">
            <img
              src="https://image.flaticon.com/icons/png/512/2917/2917995.png"
              alt=""
              width="50"
            />
          </div>
          <Link href="/">Tech Wear Store</Link>
        </div>
        <p className="py-2 text-gray-500 sm:py-0">
          All rights reserved{" "}
          <a
            className="text-gray-700 hover:underline hover:text-red-500"
            href="https://github.com/jay75chauhan"
          >
            @Jay Chauhan
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
