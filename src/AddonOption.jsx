import React, { useEffect } from "react";
const addonOptions = [
  {
    id: "1",
    description: {
      primary: "Online service",
      secondary: "Assess to multiplayer games",
    },
    price: { yearly: "10", monthly: "1" },
  },
  {
    id: "2",
    description: {
      primary: "Larger storage",
      secondary: "Extra 1 TB of cloud save",
    },
    price: { yearly: "20", monthly: "2" },
  },
  {
    id: "3",
    description: {
      primary: "Customizable profile",
      secondary: "Custom theme on your profile",
    },
    price: { yearly: "30", monthly: "3" },
  },
];
export default function AddonOption({
  id,
  description,
  price,
  isMonthlyBilling,
  addOrRemoveAddon,
  addonCheckboxes,
  addonCheckboxChanged,
}) {
  useEffect(() => {
    addOrRemoveAddon(id, addonCheckboxes[id]);
  }, [addonCheckboxes[id], addOrRemoveAddon]);

  return (
    <div className="flex items-center gap-4 transition ease-in-out border rounded-md p-4 active:border-violet-900 md:hover:border-violet-900 text-base">
      <input
        type="checkbox"
        name={id}
        checked={addonCheckboxes[id]}
        onChange={(e) => {
          const { name, checked } = e.target;
          addonCheckboxChanged(name, checked);
        }}
        className="w-5 h-5 rounded-xl"
      />
      <div className="flex flex-col flex-1">
        <p className="text-blue-900  font-semibold">{description.primary}</p>
        <p className="text-gray-400 ">{description.secondary}</p>
      </div>
      <p className="text-blue-900">
        +${isMonthlyBilling ? price.monthly : price.yearly}/
        {isMonthlyBilling ? "mo" : "yr"}
      </p>
    </div>
  );
}

export { addonOptions };
