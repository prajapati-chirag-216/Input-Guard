# Field-Validate-React

Field-Validate-React is a powerful and easy-to-use React library designed to simplify the management of input fields in forms. It reduces the amount of code required for handling `onChange` validations for fields such as name, email, password, phoneNo etc. With this library, you just need to import the package and pass your field names to the `useForm` hook, and it will take care of the rest.

## Features

- **Easy Integration**: Quickly integrate into your React forms.
- **Automatic Validation**: Handles field validations with minimal configuration.
- **Customizable**: Easily customize the validation messages and styles.
- **Lightweight**: No additional dependencies required.

## Installation

To install Field-Validate-React, use npm or yarn:

```bash
npm install field-validate-react
```

or

```bash
yarn add field-validate-react
```

## Quickstart

Here is a basic example of how to use Field-Validate-React in your project:

### Importing the Package

```javascript
import React from "react";
import {
  useForm,
  INPUT_TYPES,
  VALIDATION_MESSAGES,
} from "field-validate-react";
```

### Example Form Component

```javascript
function Form() {
  // [INPUT_TYPES.NAME, INPUT_TYPES.EMAIL, INPUT_TYPES.MOBILE] should be in line with your form input fields.
  // The custom hook predicts that the name field is at the top, then email, and then mobile.
  // It returns state in the same order as specified.
  const [nameState, emailState, mobileState, formState, loadingState] = useForm(
    [INPUT_TYPES.NAME, INPUT_TYPES.EMAIL, INPUT_TYPES.MOBILE]
  );

  const submitFormHandler = (eve) => {
    eve.preventDefault();
    // You will get a response as an array of data in the same order as passed in the `useForm` hook.
    const response = formState.onSubmit();
    if (response.success) {
      // Add your logic here for storing data or any other operations.
    }
  };

  return (
    <div className="w-[30rem] m-auto bg-red">
      <h1 className="text-3xl text-blue-400 uppercase font-semibold text-left">
        Login
      </h1>
      <hr className="h-[3px] bg-blue-400 mb-5 w-10" />
      <form
        className="w-100 h-100 flex flex-col gap-5 form"
        onSubmit={submitFormHandler}
      >
        <fieldset className="flex flex-col">
          <input
            type="text"
            placeholder="name"
            onChange={nameState.onChange}
            onBlur={nameState.onBlur}
            value={nameState.value}
            className={`border-2 border-solid p-2 text-lg focus:text-black focus:placeholder:text-slate-300 ${
              nameState.isValid === false
                ? "border-red-400 text-red-400 placeholder:text-red-300"
                : "border-blue-400 text-blue-400 placeholder:text-blue-300"
            }`}
          />
          {nameState.isValid === false && (
            <span className="text-red-400 text-start">
              {VALIDATION_MESSAGES.NAME}
            </span>
          )}
        </fieldset>

        <fieldset className="flex flex-col">
          <input
            type="text"
            placeholder="email"
            onChange={emailState.onChange}
            onBlur={emailState.onBlur}
            value={emailState.value}
            className={`border-2 border-solid p-2 text-lg focus:text-black focus:placeholder:text-slate-300 ${
              emailState.isValid === false
                ? "border-red-400 text-red-400 placeholder:text-red-300"
                : "border-blue-400 text-blue-400 placeholder:text-blue-300"
            }`}
          />
          {emailState.isValid === false && (
            <span className="text-red-400 text-start">
              {VALIDATION_MESSAGES.EMAIL}
            </span>
          )}
        </fieldset>

        <fieldset className="flex flex-col">
          <input
            type="text"
            placeholder="mobile"
            onChange={mobileState.onChange}
            onBlur={mobileState.onBlur}
            value={mobileState.value}
            className={`border-2 border-solid p-2 text-lg focus:text-black focus:placeholder:text-slate-300 ${
              mobileState.isValid === false
                ? "border-red-400 text-red-400 placeholder:text-red-300"
                : "border-blue-400 text-blue-400 placeholder:text-blue-300"
            }`}
          />
          {mobileState.isValid === false && (
            <span className="text-red-400 text-start">
              {VALIDATION_MESSAGES.MOBILE}
            </span>
          )}
        </fieldset>

        <button
          className={`p-2 bg-blue-400 text-2xl w-100 mt-3 text-white after:content-none disabled:bg-slate-200 disabled:cursor-not-allowed hover:bg-blue-500 duration-75 ${
            loadingState.isLoading && "after:animate-loading"
          }`}
          disabled={loadingState.isLoading}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
```

## API

### `useForm(fields)`

This hook manages the state and validations for the specified fields.

- **fields**: An array of input types that should be validated. Available types are `INPUT_TYPES.NAME`, `INPUT_TYPES.EMAIL`, `INPUT_TYPES.MOBILE`, etc.

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
VALIDATION_MESSAGES.NAME = "Please enter a valid name.";
VALIDATION_MESSAGES.EMAIL = "Please enter a valid email address.";
VALIDATION_MESSAGES.MOBILE = "Please enter a valid mobile number.";
```

---

With Field-Validate-React, you can effortlessly manage form validations and focus on building great user experiences.
