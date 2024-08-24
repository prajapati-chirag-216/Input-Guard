# Input-Guard

Input-Guard is a powerful and easy-to-use React library designed to simplify the management of input fields in forms. It reduces the amount of code required for handling `onChange` validations for fields such as name, email, password, phoneNo etc. With this library, you just need to import the package and pass your field names to the `useForm` hook, and it will take care of the rest.

## Features

- **Easy Integration**: Quickly integrate into your React forms.
- **Automatic Validation**: Handles field validations with minimal configuration.
- **Customizable**: Easily customize the validation messages and styles.
- **Lightweight**: No additional dependencies required.

## Installation

To install Input-Guard, use npm or yarn:

```bash
npm install input-guard
```

or

```bash
yarn add input-guard
```

## Quickstart

Here is a basic example of how to use Input-Guard in your project:

### Importing the Package

```javascript
import React from "react";
import { useForm, INPUT_TYPES, VALIDATION_MESSAGES } from "input-guard";
```

### Example Form Component

```javascript
function Form() {
  // [INPUT_TYPES.EMAIL, INPUT_TYPES.PHONE_NO] should be in line with your form input fields.
  // The useForm hook returns `formState` first followed by your inputstates, in the specified order.
  // The useForm hook predicts that the email field is at the top and then mobile.
  // You need to set className="form" to your form.
  // You need to set className="form-inp" to your input tages.

  const [formState, emailState, mobileState] = useForm([
    INPUT_TYPES.EMAIL,
    INPUT_TYPES.PHONE_NO,
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
    <form onSubmit={submitFormHandler} className="form">
      <fieldset>
        <input
          type="text"
          placeholder="email"
          onChange={emailState.onChange}
          onBlur={emailState.onBlur}
          value={emailState.value}
          className="form-inp"
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
          className="form-inp"
        />
        {mobileState.isValid === false && (
          <span>{VALIDATION_MESSAGES.PHONE_NO}</span>
        )}
      </fieldset>

      <button>Submit</button>
    </form>
  );
}

export default Form;
```

## API

### `useForm(fields)`

This hook manages the state and validations for the specified fields.

- **fields**: An array of input types that should be validated. Available types are `INPUT_TYPES.EMAIL`, `INPUT_TYPES.PHONE_NO`, etc.

Returns an array of states corresponding to the input fields and additional form state.

### Input State

Each input state object contains:

- `value`: The current value of the input field.
- `isValid`: A boolean indicating if the current value is valid.
- `onChange`: Function to handle change events.
- `onBlur`: Function to handle blur events.

### Form State

- `onSubmit()`: Function to handle form submission, returns an object containing `success` and `data`.

## Validation Messages

You can use the provided validation messages or customize them by using the VALIDATION_MESSAGES object.

```javascript
VALIDATION_MESSAGES.EMAIL = "Please enter a valid email address.";
VALIDATION_MESSAGES.PHONE_NO = "Please enter a valid mobile number.";
```

---

With Input-Guard, you can effortlessly manage form validations and focus on building great user experiences.
