import React from "react";
const descriptionData = [
  {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    description: "Double check everything looks ok before confirming.",
  },
];
export default function Descrpition({ title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-blue-900 font-bold text-2xl">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
export { descriptionData };
