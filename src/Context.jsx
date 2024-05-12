import React, {
  createContext,
  useReducer,
  useCallback,
  useState,
  useRef,
} from "react";
import { reducerMethod, initialState } from "./Reducer";
const UserContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerMethod, initialState);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const switchBillingStep = (stepId) => {
    const { name, email, phoneNum } = state.input;
    //if first step, check first
    if (state.currentBillingStep == "1") {
      if (name.length == 0 || email.length == 0 || phoneNum.length == 0) {
        if (name.length == 0) {
          nameRef.current.style.borderColor = "red";
        }
        if (email.length == 0) {
          emailRef.current.style.borderColor = "red";
        }
        if (phoneNum.length == 0) {
          phoneRef.current.style.borderColor = "red";
        }
        foundEmptyInput();
      } else {
        if (state.isInputEmpty) {
          foundNoEmptyInput();
        }
        dispatch({ type: "switch billing step", toWhichStep: stepId });
      }
    } else {
      dispatch({ type: "switch billing step", toWhichStep: stepId });
    }
  };

  const goBack = () => {
    dispatch({ type: "go back to previous step" });
  };
  const checking = () => {};
  const goToNextStep = () => {
    const { name, email, phoneNum } = state.input;
    //if first step, check first
    if (state.currentBillingStep == "1") {
      if (name.length == 0 || email.length == 0 || phoneNum.length == 0) {
        if (name.length == 0) {
          nameRef.current.style.borderColor = "red";
        }
        if (email.length == 0) {
          emailRef.current.style.borderColor = "red";
        }
        if (phoneNum.length == 0) {
          phoneRef.current.style.borderColor = "red";
        }
        foundEmptyInput();
      } else {
        if (state.isInputEmpty) {
          foundNoEmptyInput();
        }
        dispatch({ type: "go to next step" });
      }
    } else {
      dispatch({ type: "go to next step" });
    }
  };

  const switchBillingPlanModel = () => {
    dispatch({ type: "switch billing plan model" });
  };

  const handleInputChanged = (whichInputField, value) => {
    dispatch({ type: "input field changed", value, whichInputField });
  };

  const addOrRemovePlan = (planId) => {
    let instruction = state.itemsCart.planIds.includes(planId)
      ? "removed"
      : "added";

    dispatch({ type: `${instruction} plan to cart`, planId });
  };

  const addOrRemoveAddon = useCallback(
    (addonId, isCheckboxChecked) => {
      dispatch({
        type: `${isCheckboxChecked ? "added" : "removed"} add-on to cart`,
        addonId,
      });
    },
    [dispatch]
  );

  const addonCheckboxChanged = (name, checked) => {
    dispatch({ type: "add-on checkbox changed", name, checked });
  };

  const completeSubscription = () => {
    dispatch({ type: "successful subscription" });
  };

  const goBackToStepTwo = () => {
    dispatch({ type: "go back to step two" });
  };

  const foundEmptyInput = () => {
    dispatch({ type: "some input is empty" });
  };
  const foundNoEmptyInput = () => {
    dispatch({ type: "no input is empty" });
  };
  return (
    <UserContext.Provider
      value={{
        state,
        nameRef,
        emailRef,
        phoneRef,

        goBackToStepTwo,
        completeSubscription,
        goBack,
        switchBillingStep,
        goToNextStep,
        switchBillingPlanModel,
        handleInputChanged,
        addOrRemovePlan,
        addOrRemoveAddon,
        addonCheckboxChanged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
