import React, { useContext } from "react";
import { UserContext } from "./Context";
export default function RoundedNumButton({ stepId }) {
  const { switchBillingStep, state } = useContext(UserContext);

  return (
    <div
      onClick={() => switchBillingStep(stepId)}
      className={` ${
        state.currentBillingStep == stepId
          ? "bg-slate-200 text-blue-900 border-slate-200"
          : "text-white  hover:bg-slate-200 hover:text-blue-900 hover:border-slate-200"
      }   p-4 flex items-center justify-center rounded-full w-4 h-4 border-2 font-bold transition ease-in-out cursor-pointer`}
    >
      {stepId}
    </div>
  );
}
