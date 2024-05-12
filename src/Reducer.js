const initialState = {
  isMonthlyBilling: true,
  currentBillingStep: "1",
  input: {
    name: "",
    email: "",
    phoneNum: "",
  },
  itemsCart: {
    planIds: ["1"],
    addonIds: ["1", "2"],
  },
  addonCheckboxes: {
    1: true,
    2: true,
    3: false,
  },
  isSubscriptionSuccessful: false,
  isInputEmpty: false,
};
const reducerMethod = (initialState, action) => {
  switch (action.type) {
    case "switch billing plan model":
      return {
        ...initialState,
        isMonthlyBilling: !initialState.isMonthlyBilling,
      };
    case "switch billing step":
      return {
        ...initialState,
        currentBillingStep: action.toWhichStep,
      };
    case "go back to previous step":
      return {
        ...initialState,
        currentBillingStep: initialState.currentBillingStep - 1,
      };
    case "go to next step":
      return {
        ...initialState,
        currentBillingStep: parseInt(initialState.currentBillingStep) + 1,
      };
    case "input field changed":
      return {
        ...initialState,
        input: {
          ...initialState.input,
          [action.whichInputField]: action.value,
        },
      };
    case "added plan to cart":
      return {
        ...initialState,
        itemsCart: {
          ...initialState.itemsCart,
          planIds: [...initialState.itemsCart.planIds, action.planId],
        },
      };
    case "removed plan to cart":
      const plansFiltered = initialState.itemsCart.planIds.filter((id) => {
        return id != action.planId;
      });
      return {
        ...initialState,
        itemsCart: {
          ...initialState.itemsCart,
          planIds: [...plansFiltered],
        },
      };
    case "added add-on to cart":
      return {
        ...initialState,
        itemsCart: {
          ...initialState.itemsCart,
          addonIds: [...initialState.itemsCart.addonIds, action.addonId],
        },
      };
    case "removed add-on to cart":
      const addonFiltered = initialState.itemsCart.addonIds.filter((id) => {
        return id !== action.addonId;
      });
      return {
        ...initialState,
        itemsCart: {
          ...initialState.itemsCart,
          addonIds: [...addonFiltered],
        },
      };
    case "add-on checkbox changed":
      return {
        ...initialState,
        addonCheckboxes: {
          ...initialState.addonCheckboxes,
          [action.name]: action.checked,
        },
      };
    case "successful subscription":
      return {
        ...initialState,
        isSubscriptionSuccessful: true,
      };
    case "go back to step two":
      return {
        ...initialState,
        currentBillingStep: "2",
      };
    case "some input is empty":
      return {
        ...initialState,
        isInputEmpty: true,
      };
    case "no input is empty":
      return {
        ...initialState,
        isInputEmpty: false,
      };
    default:
      break;
  }
};

export { initialState, reducerMethod };
