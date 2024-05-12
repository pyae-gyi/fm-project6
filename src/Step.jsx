import React from "react";
import RoundedNumButton from "./RoundedNumButton";
export default function Step({ stepId, description }) {
  return (
    <div className="md:flex md:gap-3 md:items-center">
      <RoundedNumButton stepId={stepId} />
      <div className="hidden md:flex md:flex-col text-sm">
        <p className="font-extralight text-slate-300 uppercase">
          step {stepId}
        </p>
        <p className="font-semibold text-white uppercase tracking-widest">
          {description}
        </p>
      </div>
    </div>
  );
}
