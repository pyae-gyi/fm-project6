import React from "react";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconPro from "../assets/images/icon-pro.svg";

const billingPlanData = [
  {
    iconPath: iconArcade,
    id: "1",
    label: "Arcade",
    price: { monthly: "9", yearly: "90" },
  },
  {
    iconPath: iconAdvanced,
    id: "2",
    label: "Advanced",
    price: { monthly: "12", yearly: "120" },
  },
  {
    iconPath: iconPro,
    id: "3",
    label: "Pro",
    price: { monthly: "15", yearly: "150" },
  },
];
export default function BillingPlanOption({
  id,
  iconPath,
  label,
  price,
  isMonthlyBilling,
  addOrRemovePlan,
  itemsCart,
}) {
  return (
    <div
      onClick={() => addOrRemovePlan(id)}
      className={`${
        itemsCart.planIds.includes(id)
          ? "border-blue-900 "
          : "focus:border-blue-900 "
      }md:select-none flex flex-row md:flex-col md:gap-7 border transition ease-in-out gap-4 md:flex-1  rounded-md p-4  text-base`}
    >
      <div>
        <img src={iconPath} alt={label} />
      </div>
      <div className="flex flex-col ">
        <p className="text-blue-900  font-semibold">{label}</p>
        <p className="text-gray-400 ">
          ${isMonthlyBilling ? price.monthly : price.yearly}/
          {isMonthlyBilling ? "mo" : "yr"}
        </p>

        {!isMonthlyBilling && (
          <span className="text-blue-900 text-sm">2 months free</span>
        )}
      </div>
    </div>
  );
}

export { billingPlanData };
