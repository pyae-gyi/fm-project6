import React, { useContext } from "react";
import { UserContext } from "./Context";
const inputFieldsData = [
  {
    label: "Name",
    placeholder: "e.g. Stephen King",
    name: "name",
  },
  {
    label: "Email Address",
    name: "email",
    placeholder: "e.g. stephenking@gmail.com",
  },
  {
    label: "Phone Number",
    name: "phoneNum",
    placeholder: "e.g. +1 234 567 890",
  },
];
export default function InputContainer({ label, placeholder, name }) {
  const { handleInputChanged, state, nameRef, emailRef, phoneRef } =
    useContext(UserContext);
  return (
    <div>
      <div className="flex justify-between">
        <span className="text-blue-900 text-sm">{label} *</span>
        {state.isInputEmpty && (
          <span className="text-sm font-medium text-red-500">
            This field is required.
          </span>
        )}
      </div>
      <input
        ref={
          name == "phoneNum" ? phoneRef : name == "email" ? emailRef : nameRef
        }
        onChange={(e) => {
          const { name, value } = e.target;
          handleInputChanged(name, value);
        }}
        pattern={name == "phoneNum" ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : ""}
        type={name == "phoneNum" ? "tel" : name == "email" ? "email" : "text"}
        name={name}
        value={state.input[name]}
        placeholder={placeholder}
        className="w-full px-4 py-2 cursor-pointer outline-none 
        border-slate-200 border rounded-md caret-violet-500 focus:border-violet-500"
      />
    </div>
  );
}
export { inputFieldsData };
