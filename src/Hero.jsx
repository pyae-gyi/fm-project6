import React, { useContext } from "react";
import { UserContext } from "./Context";
import billingSteps from "./billingSteps";
import Thankyou from "./Thankyou";
export default function Hero() {
  const { state, goBack, goToNextStep, completeSubscription } =
    useContext(UserContext);
  if (state.isSubscriptionSuccessful) {
    return <Thankyou />;
  }
  return (
    <div className=" max-md:bg-slate-300 flex-grow relative md:pt-7 md:px-20 md:flex md:flex-col md:justify-between">
      <div className="max-md:p-3 max-md:absolute max-md:-top-[14%]  w-full">
        {billingSteps[state.currentBillingStep]}
      </div>
      <div className="flex justify-between p-3 md:px-0 max-md:absolute w-full max-md:bottom-0 bg-white items-center font-medium">
        <button
          onClick={goBack}
          className={` text-gray-400 hover:text-blue-900 transition-colors ${
            state.currentBillingStep < 2 && "invisible"
          }`}
        >
          Go Back
        </button>
        <div className="flex">
          <button
            onClick={goToNextStep}
            type="submit"
            className={`px-4 py-2 bg-blue-900 text-white rounded-md ${
              state.currentBillingStep > 3 && "hidden"
            }`}
          >
            Next Step
          </button>
          <button
            onClick={completeSubscription}
            type="submit"
            className={`px-4 py-2 bg-blue-600 text-white rounded-md md:rounded-lg ${
              state.currentBillingStep > 3 ? "block" : "hidden"
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
