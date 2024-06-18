import {
  cardNoReducer,
  cvvReducer,
  descriptionReducer,
  emailReducer,
  expiryDateReducer,
  generalReducer,
  nameReducer,
  numberReducer,
  passwordReducer,
  phoneNoReducer,
  pinCodeReducer,
  requiredReducer,
  userNameReducer,
} from "../validators";

export const INPUT_ACTIONS = {
  INPUT_FETCH: "INPUT_FETCH",
  USER_INPUT: "USER_INPUT",
  INPUT_BLUR: "INPUT_BLUR",
};

// we will provide this values to user
export const INPUT_TYPES = {
  NAME: "NAME",
  USERNAME: "USERNAME",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  MOBILE: "MOBILE",
  DIGIT: "DIGIT",
  PINCODE: "PINCODE",
  DATE: "DATE",
  CARD: "CARD",
  ADDRESS: "ADDRESS",
  CVV: "CVV",
  DESCRIPTION: "DESCRIPTION",
  GENRAL: "GENRAL",
};

// we will provide this values to user
export const VALIDATION_MESSAGES = {
  NAME: "Name: 5-30 characters, cannot contain a number or special character.",
  USERNAME: "Username: 5-30 characters, cannot start a number.",
  EMAIL: "Enter a valid email address.",
  PASSWORD: "Password: 6-10 characters, avoid 'password'.",
  MOBILE: "Enter a valid phone number.",
  DIGIT: "Enter a valid number > 0.",
  ADDRESS: "Address is required (max 300 characters)",
  REQUIRED: "This Field is required",
  PINCODE: "Enter a valid 6-digit PIN code.",
  DATE: "Enter a valid date",
  CARDNO: "Enter a valid 14-digit card number.",
  CVV: "CVV: 3-4 digits.",
  EXPIRYDATE: "Enter a valid expiry date.",
  DESCRIPTION: "Description: 40-400 characters.",
  IMAGE: "Image is required (jpeg,png,jpg)",
};

export const INPUT_VALIDATORS = {
  NAME: nameReducer,
  USERNAME: userNameReducer,
  EMAIL: emailReducer,
  PASSWORD: passwordReducer,
  MOBILE: phoneNoReducer,
  DIGIT: numberReducer,
  PINCODE: pinCodeReducer,
  DATE: expiryDateReducer,
  CARD: cardNoReducer,
  ADDRESS: requiredReducer,
  CVV: cvvReducer,
  DESCRIPTION: descriptionReducer,
  GENRAL: generalReducer,
};
