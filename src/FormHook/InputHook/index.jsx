import { useReducer } from "react";
import { INPUT_ACTIONS } from "../../utils/variables";

const useInput = (reducer) => {
  // Initialize the reducer with the initial state
  const [inputState, dispatchInput] = useReducer(reducer, {
    value: "",
    isValid: null,
  });

  // Handler to update the input value on change
  const changeInputHandler = (eve) => {
    const value = eve.target.value;
    dispatchInput({ type: INPUT_ACTIONS.USER_INPUT, value }); // Dispatch action for user input
  };

  // Handler to validate the input on blur
  const validateInputHandler = (eve) => {
    const value = eve.target.value;
    dispatchInput({ type: INPUT_ACTIONS.INPUT_BLUR, value }); // Dispatch action for input blur
  };

  // Define the input state object to return
  const inputStates = {
    value: inputState.value, // Current value of the input
    isValid: inputState.isValid, // Current validity status of the input
    onChange: changeInputHandler, // Change handler for the input
    onBlur: validateInputHandler, // Blur handler for the input
  };

  return inputStates; // Return the input states and handlers
};

export default useInput;
