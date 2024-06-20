import { useEffect, useState } from "react";
import { INPUT_VALIDATORS } from "../utils/variables";
import useInput from "./InputHook/index.jsx";

export const useForm = (inputFields) => {
  const [isFormValid, setIsFormValid] = useState(false);

  // calling useInput for each input field and getting list of states
  const inputStates = inputFields.map((field) =>
    useInput(INPUT_VALIDATORS[field])
  );

  // Getting array of input status ie.[true,false,..]
  const areInputsValid = inputStates.map((inputState) => inputState.isValid);

  useEffect(() => {
    // implemented debouncing
    const timer = setTimeout(() => {
      const isValid = areInputsValid.every((isValid) => isValid);
      setIsFormValid(isValid);
    }, [500]);

    return () => clearTimeout(timer);
  }, areInputsValid);

  const validateFormHandler = () => {
    const formElement = document.querySelector(".form");

    // Get all input elements within the form
    const inputElements = formElement.querySelectorAll(".form-inp");

    // Loop through each from last and then focus first invalid input
    for (let index = areInputsValid.length - 1; index >= 0; index--) {
      if (!areInputsValid[index]) {
        // this cycle of focus blur and focus will make all inputs to show validation message
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
      // Return success status and form data
      return { success: true, data };
    }
  };

  const formState = {
    onSubmit: submitFormHandler, // Submit form handler
  };

  return [formState, ...inputStates];
};
