import {
  formateDOB,
  formateData,
  formateDate,
  validateEmail,
} from "../functions";

// Reducer for handling name input state and validation
export const nameReducer = (state, action) => {
  let newVal, containsNumber;

  if (action.value !== undefined) {
    newVal = action.value;
    newVal = newVal.replace(/[^a-zA-Z0-9\s]+/g, "");
    containsNumber = /\d/.test(newVal);
  }

  if (action.type === "INPUT_FETCH") {
    return {
      value: newVal,
      isValid:
        newVal.trim().length == 0
          ? null
          : newVal.trim().length > 2 &&
            newVal.trim().length <= 30 &&
            !containsNumber,
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: newVal,
      isValid:
        newVal.trim().length > 2 &&
        newVal.trim().length <= 30 &&
        !containsNumber,
    };
  }

  if (action.type === "INPUT_BLUR") {
    containsNumber = /\d/.test(state.value.trim());
    return {
      value: state.value.trim(),
      isValid:
        state.value.trim().length > 2 &&
        state.value.trim().length <= 30 &&
        !containsNumber,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling userName input state and validation
export const userNameReducer = (state, action) => {
  let newVal, startsWithNumber;

  if (action.value !== undefined) {
    newVal = action.value;
    newVal = newVal.replace(/[^a-zA-Z0-9\s_@]+/g, ""); // Allow _ and @
    startsWithNumber = /^\d/.test(newVal);
  }

  if (action.type === "INPUT_FETCH") {
    return {
      value: newVal,
      isValid:
        newVal.trim().length === 0
          ? null
          : newVal.trim().length > 5 &&
            newVal.trim().length <= 30 &&
            !startsWithNumber,
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: newVal,
      isValid:
        newVal.trim().length > 5 &&
        newVal.trim().length <= 30 &&
        !startsWithNumber,
    };
  }

  if (action.type === "INPUT_BLUR") {
    startsWithNumber = /^\d/.test(state.value.trim());
    return {
      value: state.value.trim(),
      isValid:
        state.value.trim().length > 5 &&
        state.value.trim().length <= 30 &&
        !startsWithNumber,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling email input state and validation
export const emailReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    return {
      value: action.value.trim(),
      isValid:
        action.value.trim().length === 0
          ? null
          : validateEmail(action.value.trim()),
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: action.value.trim(),
      isValid: validateEmail(action.value.trim()),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value.trim(),
      isValid: validateEmail(state.value.trim()),
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling password input state and validation
export const passwordReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    return {
      value: action.value.trim(),
      isValid:
        action.value.trim().length === 0
          ? null
          : action.value.trim().length >= 6 &&
            action.value.trim().length <= 10 &&
            !action.value.trim().toLowerCase().includes("password"), // Validate length and exclusion of "password"
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: action.value.trim(),
      isValid:
        action.value.trim().length >= 6 &&
        action.value.trim().length <= 10 &&
        !action.value.trim().toLowerCase().includes("password"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid:
        state.value.trim().length >= 6 &&
        state.value.trim().length <= 10 &&
        !state.value.trim().toLowerCase().includes("password"),
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling phone number input state and validation
export const phoneNoReducer = (state, action) => {
  let formattedPhoneNumber;

  if (action.value !== undefined) {
    formattedPhoneNumber = formateData(action.value, "-", 10);
    formattedPhoneNumber = formattedPhoneNumber.replace(/[^0-9-]/g, "");
  }

  if (action.type === "INPUT_FETCH") {
    return {
      value: formattedPhoneNumber,
      isValid:
        formattedPhoneNumber.trim().length === 0
          ? null
          : formattedPhoneNumber.length === 12 &&
            !formattedPhoneNumber.startsWith("0"),
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: formattedPhoneNumber,
      isValid:
        formattedPhoneNumber.length === 12 &&
        !formattedPhoneNumber.startsWith("0"),
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length === 12 && !state.value.startsWith("0"),
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling number input state and validation
export const numberReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value >= 1 && !action.value.startsWith(0), // Validate non-zero starting digit and minimum value
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value >= 1 && !state.value.startsWith(0),
    };
  }

  return { value: 0, isValid: null };
};

// Reducer for handling general input state and validation
export const generalReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    return {
      value: action.value,
      isValid:
        action.value.length === 0
          ? null
          : action.value.length >= 0 && action.value.length < 300, // Validate length range
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.length >= 0 && action.value.length < 300,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length >= 0 && state.value.length < 300,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling general input state and validation
export const requiredReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    return {
      value: action.value,
      isValid:
        action.value.length === 0
          ? null
          : action.value.length > 0 && action.value.length < 1000, // Validate length range
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value: action.value,
      isValid: action.value.length > 0 && action.value.length < 1000,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length > 0 && state.value.length < 1000,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling pin code input state and validation
export const pinCodeReducer = (state, action) => {
  let newVal;

  if (action.value !== undefined) {
    newVal = action.value;
    newVal = newVal.replace(/\D/g, "");
  }

  if (action.type === "INPUT_FETCH") {
    return {
      value: newVal,
      isValid: newVal.length == 0 ? null : newVal.length === 6,
    };
  }
  if (action.type === "USER_INPUT") {
    if (newVal.length === 7) {
      return { value: state.value.trim(), isValid: true };
    }
    return {
      value: newVal,
      isValid: newVal.length === 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value.trim(),
      isValid: state.value.trim().length === 6,
    };
  }
  return { value: "", isValid: null };
};

// Reducer for handling card number input state and validation
export const cardNoReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    const formattedCardNumber = formateData(action.value, " ", 12);
    return {
      value: action.value.trim(),
      isValid:
        action.value.trim().length === 0
          ? null
          : formattedCardNumber.length === 14, // Validate formatted length
    };
  }

  if (action.type === "USER_INPUT") {
    const formattedCardNumber = formateData(action.value, " ", 12);
    return {
      value: formattedCardNumber,
      isValid: formattedCardNumber.length === 14,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length === 14,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling CVV input state and validation
export const cvvReducer = (state, action) => {
  let newVal;

  if (action.value !== undefined) {
    newVal = action.value;
    newVal = newVal.replace(/\s/g, "").replace(/\D/g, ""); // Remove spaces and non-digit characters
  }

  if (action.type === "INPUT_FETCH") {
    return {
      value: newVal,
      isValid:
        newVal.length === 0 ? null : newVal.length >= 3 && newVal.length <= 4, // Validate length range
    };
  }

  if (action.type === "USER_INPUT") {
    if (action.value.trim().length === 5) {
      return { value: state.value.trim(), isValid: true };
    }
    return {
      value: newVal,
      isValid: newVal.length >= 3 && newVal.length <= 4,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value.trim(),
      isValid: state.value.trim().length >= 3 && state.value.trim().length <= 4,
    };
  }

  return { value: "", isValid: null };
};

// Reducer for handling card expiry date input state and validation
export const expiryDateReducer = (state, action) => {
  const currentDate = new Date();
  const curruentYear = +currentDate.getFullYear().toString().slice(2);
  const curruentMonth = currentDate.getMonth() + 1;

  if (action.type === "INPUT_FETCH") {
    const { tempDate, isValid } = formateDate(action.value);
    return {
      value: tempDate,
      isValid: action.value.trim().length === 0 ? null : isValid, // Validate date format
    };
  }

  if (action.type === "USER_INPUT") {
    const { tempDate, isValid } = formateDate(action.value);
    return {
      value: tempDate,
      isValid: isValid,
    };
  }

  if (action.type === "INPUT_BLUR") {
    let newDate = state.value.split("/");
    const month_inp = +newDate[0];
    const year_inp = +newDate[1];
    let isValid;
    if (year_inp == curruentYear) {
      isValid = month_inp !== 0 && month_inp <= 12 && month_inp > curruentMonth;
    } else {
      isValid = month_inp !== 0 && month_inp <= 12 && year_inp > curruentYear;
    }
    isValid = isValid && newDate.join("").length === 4;
    return {
      value: state.value,
      isValid: isValid,
    };
  }

  return { value: "", isValid: null };
};

// we will work on it in future
// Reducer for handling DOB input state and validation
// export const DOBReducer = (state, action) => {
//   const currentDate = new Date();
//   const curruentYear = currentDate.getFullYear().slice(2);
//   const curruentMonth = currentDate.getMonth() + 1;

//   if (action.type === "INPUT_FETCH") {
//     const { tempDate, isValid } = formateDOB(action.value);
//     return {
//       value: tempDate,
//       isValid: action.value.trim().length === 0 ? null : isValid, // Validate date format
//     };
//   }

//   if (action.type === "USER_INPUT") {
//     const { tempDate, isValid } = formateDOB(action.value);
//     return {
//       value: tempDate,
//       isValid: isValid,
//     };
//   }

//   const date_inp = +newDate[0];
//   const month_inp = +newDate[1];
//   const year_inp = +newDate[2];

//   if (action.type === "INPUT_BLUR") {
//     let newDate = state.value.split("/");
//     let isValid;
//     if (year_inp == curruentYear) {
//       if (month_inp == curruentMonth) {
//         isValid = date_inp !== 0 && date_inp < currentDate;
//       } else {
//         isValid =
//           date_inp !== 0 &&
//           date_inp <= 31 &&
//           month_inp !== 0 &&
//           month_inp < curruentMonth;
//       }
//     } else {
//       isValid =
//         date_inp !== 0 &&
//         date_inp <= 12 &&
//         month_inp !== 0 &&
//         year_inp !== 0 &&
//         month_inp <= 12 &&
//         month_inp < curruentYear;
//     }

//     isValid = isValid && newDate.join("").length === 8;
//     return {
//       value: state.value,
//       isValid: isValid,
//     };
//   }

//   return { value: "", isValid: null };
// };

// Reducer for handling description input state and validation
export const descriptionReducer = (state, action) => {
  if (action.type === "INPUT_FETCH") {
    return {
      value: action.value,
      isValid:
        action.value.trim().length === 0
          ? null
          : action.value.length >= 40 && action.value.length <= 400, // Validate length range
    };
  }

  if (action.type === "USER_INPUT") {
    return {
      value:
        action.value.startsWith(" ") || action.value.endsWith("  ")
          ? action.value.trim() + " "
          : action.value,
      isValid: action.value.length >= 40 && action.value.length <= 400,
    };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.length >= 40 && state.value.length <= 400,
    };
  }

  return { value: "", isValid: null };
};
