import { useEffect, useState } from "react";
import { INPUT_VALIDATORS } from "../utils/variables";
import useInput from "./InputHook/index.jsx";

export const useForm = (inputFields) => {
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  // Call useInput for each input field and get a list of states
  const inputStates = inputFields.map((field) =>
    useInput(INPUT_VALIDATORS[field])
  );

  // Get an array of input validity statuses [true, false, ...]
  const areInputsValid = inputStates.map((inputState) => inputState.isValid);

  useEffect(() => {
    // Implement debouncing to check form validity
    const timer = setTimeout(() => {
      const isValid = areInputsValid.every((isValid) => isValid);
      setIsFormValid(isValid); // Update form validity state
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, areInputsValid); // Dependency array to re-run effect when input validity changes

  const validateFormHandler = () => {
    const formElement = document.getElementById("form");

    // Get all input elements within the form
    const inputElements = formElement.querySelectorAll("input");

    // Loop through each and focus the first invalid input
    for (let index = areInputsValid.length - 1; index >= 0; index--) {
      if (!areInputsValid[index]) {
        // this simple hack of focus-blur-focus cycle will highlight all invalid inputs
        inputElements[index].focus();
        inputElements[index].blur();
        inputElements[index].focus();
      }
    }
  };

  const submitFormHandler = (eve) => {
    if (eve) {
      eve.preventDefault(); // Prevent default form submission behavior
    }
    if (!isFormValid) {
      validateFormHandler(); // Validate form if not valid
      return { success: false };
    } else {
      const data = inputStates.map((inputState) => inputState.value);

      // Return success status and form data (useful for API calls)
      return { success: true, data };
    }
  };

  const formState = {
    onSubmit: submitFormHandler, // Submit form handler
  };

  return [formState, ...inputStates]; // Return combined states
};
