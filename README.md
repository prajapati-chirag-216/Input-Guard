# Inputs-Validator-React

Inputs-Validator-React is a powerful and easy-to-use React library designed to simplify the management of input fields in forms. It reduces the amount of code required for handling `onChange` validations for fields such as name, email, password, phoneNo etc. With this library, you just need to import the package and pass your field names to the `useForm` hook, and it will take care of the rest.

## Features

- **Easy Integration**: Quickly integrate into your React forms.
- **Automatic Validation**: Handles field validations with minimal configuration.
- **Customizable**: Easily customize the validation messages and styles.
- **Lightweight**: No additional dependencies required.

## Installation

To install Inputs-Validator-React, use npm or yarn:

```bash
npm install inputs-validator-react
```

or

```bash
yarn add inputs-validator-react
```

## Quickstart

Here is a basic example of how to use Inputs-Validator-React in your project:

### Importing the Package

```javascript
import React from "react";
import {
  useForm,
  INPUT_TYPES,
  VALIDATION_MESSAGES,
} from "inputs-validator-react";
```

### Example Form Component

```javascript
function Form() {
  // [INPUT_TYPES.EMAIL, INPUT_TYPES.MOBILE] should be in line with your form input fields.
  // The custom hook predicts that the email field is at the top and then mobile.
  // It returns state in the same order as specified.
  const [mailState, mobileState, formState, loadingState] = useForm([
    INPUT_TYPES.EMAIL,
    INPUT_TYPES.MOBILE,
  ]);

  const submitFormHandler = (eve) => {
    eve.preventDefault();
    // You will get a response as an array of data in the same order as passed in the `useForm` hook.
    const response = formState.onSubmit();
    if (response.success) {
      // Add your logic here for storing data or any other operations.
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <fieldset>
        <input
          type="text"
          placeholder="email"
          onChange={emailState.onChange}
          onBlur={emailState.onBlur}
          value={emailState.value}
        />
        {emailState.isValid === false && (
          <span>{VALIDATION_MESSAGES.EMAIL}</span>
        )}
      </fieldset>

      <fieldset>
        <input
          type="text"
          placeholder="mobile"
          onChange={mobileState.onChange}
          onBlur={mobileState.onBlur}
          value={mobileState.value}
        />
        {mobileState.isValid === false && (
          <span>{VALIDATION_MESSAGES.MOBILE}</span>
        )}
      </fieldset>

      <button disabled={loadingState.isLoading}>Submit</button>
    </form>
  );
}

export default Form;
```

## API

### `useForm(fields)`

This hook manages the state and validations for the specified fields.

- **fields**: An array of input types that should be validated. Available types are `INPUT_TYPES.EMAIL`, `INPUT_TYPES.MOBILE`, etc.

Returns an array of states corresponding to the input fields and additional form state.

### Input State

Each input state object contains:

- `value`: The current value of the input field.
- `isValid`: A boolean indicating if the current value is valid.
- `onChange`: Function to handle change events.
- `onBlur`: Function to handle blur events.

### Form State

- `onSubmit()`: Function to handle form submission, returns an object containing `success` and `data`.

### Loading State

- `isLoading`: A boolean indicating if the form is in the loading state.

## Validation Messages

You can use the provided validation messages or customize them by using the VALIDATION_MESSAGES object.

```javascript
VALIDATION_MESSAGES.EMAIL = "Please enter a valid email address.";
VALIDATION_MESSAGES.MOBILE = "Please enter a valid mobile number.";
```

---

With Inputs-Validator-React, you can effortlessly manage form validations and focus on building great user experiences.
