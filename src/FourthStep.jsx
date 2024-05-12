import React, { useContext } from "react";
import Descrpition from "./Descrpition";
import { descriptionData } from "./Descrpition";
import { UserContext } from "./Context";
import { billingPlanData } from "./BillingPlanOption";
import { addonOptions } from "./AddonOption";
function FourthStep() {
  const { state, goBackToStepTwo } = useContext(UserContext);
  const { isMonthlyBilling } = state;
  const { planIds, addonIds } = state.itemsCart;
  const filteredPlans = billingPlanData.filter((eachPlan) =>
    planIds.includes(eachPlan.id)
  );
  const filteredAddons = addonOptions.filter((eachAddon) =>
    addonIds.includes(eachAddon.id)
  );
  const calculateSumOfPrices = (array) => {
    return array.reduce((accumulator, data) => {
      const price = isMonthlyBilling ? data.price.monthly : data.price.yearly;
      return accumulator + parseInt(price);
    }, 0);
  };
  const totalPricesOfAddons = calculateSumOfPrices(filteredAddons);
  const totalPricesOfPlans = calculateSumOfPrices(filteredPlans);
  return (
    <div className="max-md:p-7 max-md:shadow-md bg-white max-md:rounded-[0.7rem]  space-y-9 transition-all ease-in-out">
      <Descrpition
        title={descriptionData[3].title}
        description={descriptionData[3].description}
      />
      <div className="space-y-3">
        <div className="px-6 py-4 bg-blue-900 bg-opacity-[0.085] rounded-lg space-y-3">
          <div className="space-y-3">
            {filteredPlans.map(({ label, price }) => {
              return (
                <div
                  key={label}
                  className="flex justify-between items-center font-semibold"
                >
                  <div className="flex flex-col">
                    <p className="text-blue-900">
                      {label} {isMonthlyBilling ? "(Monthly)" : "(Yearly)"}
                    </p>
                    <p
                      onClick={goBackToStepTwo}
                      className="text-gray-400 hover:text-blue-600 text-sm underline font-normal cursor-pointer"
                    >
                      Change
                    </p>
                  </div>
                  <p className="text-blue-900 ">
                    +${isMonthlyBilling ? price.monthly : price.yearly}/
                    {isMonthlyBilling ? "mo" : "yr"}
                  </p>
                </div>
              );
            })}
          </div>
          <hr className="bg-slate-200 h-[0.13rem]" />
          <div className="space-y-3">
            {filteredAddons.map(({ description, price }) => {
              return (
                <div
                  key={description.primary}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-400">{description.primary}</p>
                  </div>
                  <p className="text-blue-900 ">
                    +${isMonthlyBilling ? price.monthly : price.yearly}/
                    {isMonthlyBilling ? "mo" : "yr"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center px-6">
          <div>
            <p className="text-gray-400">Total (per month)</p>
          </div>
          <p className="text-blue-600 text-lg font-semibold">
            ${totalPricesOfAddons + totalPricesOfPlans}/
            {isMonthlyBilling ? "mo" : "yr"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthStep;
