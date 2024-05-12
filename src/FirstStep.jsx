import React from "react";
import InputContainer, { inputFieldsData } from "./InputContainer";
import Descrpition from "./Descrpition";
import { descriptionData } from "./Descrpition";

export default function FirstSetep() {
  return (
    <div className="max-md:p-7 max-md:shadow-md bg-white max-md:rounded-[0.7rem]  space-y-4 transition ease-in-out">
      <Descrpition
        title={descriptionData[0].title}
        description={descriptionData[0].description}
      />
      <div className="space-y-3">
        {inputFieldsData.map((data) => {
          return <InputContainer key={data.label} {...data} />;
        })}
      </div>
    </div>
  );
}
