import React, { useContext } from "react";
import Descrpition from "./Descrpition";
import { descriptionData } from "./Descrpition";
import AddonOption, { addonOptions } from "./AddonOption";
import { UserContext } from "./Context";
export default function ThirdStep() {
  const { state, addOrRemoveAddon, addonCheckboxChanged } =
    useContext(UserContext);
  return (
    <div className="max-md:p-7 max-md:shadow-md bg-white max-md:rounded-[0.7rem]  space-y-4 transition-all ease-in-out">
      <Descrpition
        title={descriptionData[2].title}
        description={descriptionData[2].description}
      />
      <div className="space-y-3 ">
        {addonOptions.map((data) => {
          return (
            <AddonOption
              key={data.id}
              {...data}
              isMonthlyBilling={state.isMonthlyBilling}
              addOrRemoveAddon={addOrRemoveAddon}
              addonCheckboxes={state.addonCheckboxes}
              addonCheckboxChanged={addonCheckboxChanged}
            />
          );
        })}
      </div>
    </div>
  );
}
