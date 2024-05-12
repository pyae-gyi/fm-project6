import React from "react";
import iconThankyou from "../assets/images/icon-thank-you.svg";
export default function Thankyou() {
  return (
    <div className="  max-md:bg-slate-300 max-md:flex-grow md:flex-grow-0 relative md:flex md:items-center md:justify-center">
      <div className="max-md:p-3 max-md:absolute md:w-[62%] max-md:-top-[14%] ">
        <div className="text-center   space-y-5  max-md:py-20 max-md:px-5 max-md:shadow-md bg-white max-md:rounded-[0.7rem] transition ease-in-out">
          <div className="flex justify-center">
            <img src={iconThankyou} alt="thank you" className="" />
          </div>
          <div className="space-y-3">
            <p className="text-blue-900 font-bold text-3xl">Thank you.</p>
            <p className="text-gray-400 leading-7">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
