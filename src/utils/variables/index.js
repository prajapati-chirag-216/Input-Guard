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
  // DOBReducer,
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
  NUMBER: "NUMBER",
  PHONE_NO: "PHONE_NO",
  PIN_CODE: "PIN_CODE",
  CARD_EXPIRY: "CARD_EXPIRY",
  CARD_NO: "CARD_NO",
  ADDRESS: "ADDRESS",
  CVV: "CVV",
  DESCRIPTION: "DESCRIPTION",
  GENRAL: "GENRAL",
  REQUIRED: "REQUIRED",
  // DOB: "DOB",
};

// we will provide this values to user
export const VALIDATION_MESSAGES = {
  NAME: "3-30 characters, can't contain a number/special character",
  USERNAME: "Username: 5-30 characters, cannot start with a number",
  EMAIL: "Enter a valid email address",
  PASSWORD: "6-10 characters, avoid 'password'",
  PHONE_NO: "Enter a valid phone number",
  NUMBER: "Enter a valid number > 0",
  ADDRESS: "Address is required (max 300 characters)",
  GENRAL: "Required (max 300 characters)",
  REQUIRED: "This field is required (max 1000 characters)",
  PIN_CODE: "Enter a valid 6-digit PIN code",
  CARD_EXPIRY: "Enter a valid date",
  CARD_NO: "Enter a valid 14-digit card number",
  CVV: "CVV: 3-4 digits",
  DESCRIPTION: "40-400 characters",
  IMAGE: "Image is required (jpeg,png,jpg)",
  // DOB: "Enter a valid DOB",
};

export const INPUT_VALIDATORS = {
  NAME: nameReducer,
  USERNAME: userNameReducer,
  EMAIL: emailReducer,
  PASSWORD: passwordReducer,
  PHONE_NO: phoneNoReducer,
  NUMBER: numberReducer,
  PIN_CODE: pinCodeReducer,
  CARD_EXPIRY: expiryDateReducer,
  CARD_NO: cardNoReducer,
  ADDRESS: requiredReducer,
  CVV: cvvReducer,
  DESCRIPTION: descriptionReducer,
  GENRAL: generalReducer,
  REQUIRED: requiredReducer,
  // DOB: DOBReducer,
};
