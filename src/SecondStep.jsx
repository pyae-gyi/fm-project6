import React, { useContext } from "react";
import Descrpition, { descriptionData } from "./Descrpition";
import { billingPlanData } from "./BillingPlanOption";
import BillingPlanOption from "./BillingPlanOption";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { UserContext } from "./Context";
export default function () {
  const { state, switchBillingPlanModel, addOrRemovePlan } =
    useContext(UserContext);
  const { isMonthlyBilling, itemsCart } = state;
  return (
    <div className="max-md:p-7 max-md:shadow-md bg-white max-md:rounded-[0.7rem]  space-y-4 transition ease-in-out">
      <Descrpition
        title={descriptionData[1].title}
        description={descriptionData[1].description}
      />
      <div className="gap-3 md:gap-4 flex flex-col md:flex-row md:items-stretch">
        {billingPlanData.map((data, index) => {
          return (
            <BillingPlanOption
              key={data.label}
              {...billingPlanData[index]}
              isMonthlyBilling={isMonthlyBilling}
              addOrRemovePlan={addOrRemovePlan}
              itemsCart={itemsCart}
            />
          );
        })}
      </div>
      <div className="flex gap-4 justify-center items-center bg-blue-900 bg-opacity-[0.085] rounded-md">
        <p
          className={` font-medium ${
            isMonthlyBilling ? "text-blue-900" : "text-gray-400"
          }`}
        >
          Monthly
        </p>
        <div className=" w-14" onClick={switchBillingPlanModel}>
          {isMonthlyBilling ? (
            <MdToggleOff className="w-full h-full fill-blue-900" />
          ) : (
            <MdToggleOn className="w-full h-full fill-blue-900" />
          )}
        </div>

        <p
          className={` font-medium ${
            isMonthlyBilling ? "text-gray-400 " : "text-blue-900"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
