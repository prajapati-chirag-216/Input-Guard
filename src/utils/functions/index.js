// for formating Data
export const formateData = (value, formateWith, validLength) => {
  let data = value.replace(/\s/g, "").replace(/\D/g, "");

  let formattedData = "";

  for (let i = 0; i < data.length; i++) {
    formattedData += data[i];
    if ((i + 1) % 4 === 0 && i !== data.length - 1) {
      formattedData += formateWith;
    }
  }

  if (data.length > validLength) {
    data = data.slice(0, validLength - 1);
    formattedData = formattedData.slice(0, validLength + 2);
  }
  return formattedData;
};

// for formating Date
export const formateDate = (value) => {
  const currentDate = new Date();
  const curruentYear = +currentDate.getFullYear().toString().slice(2);
  const curruentMonth = currentDate.getMonth() + 1;

  let extractedDate = value.replace(/\s/g, "").replace(/\D/g, "");

  let tempDate = "";

  for (let i = 0; i < extractedDate.length; i++) {
    tempDate += extractedDate[i];
    if (tempDate.length === 2) {
      tempDate += "/";
    }
  }
  if (tempDate.length > 5) {
    tempDate = tempDate.slice(0, 5);
  }
  let newDate = tempDate.split("/");

  const month_inp = +newDate[0];
  const year_inp = +newDate[1];

  let isValid;
  if (year_inp == curruentYear) {
    isValid = month_inp !== 0 && month_inp <= 12 && month_inp > curruentMonth;
  } else {
    isValid = month_inp !== 0 && month_inp <= 12 && year_inp > curruentYear;
  }
  isValid = isValid && newDate.join("").length === 4;
  // let isValid = newDate[0] !== "00" && +newDate[0] <= 12 && +newDate[1] > 23; // letter we will change to currunt time
  return { tempDate, isValid };
};

// for formating DOB
export const formateDOB = (value) => {
  const currentDate = new Date();
  const curruentYear = +currentDate.getFullYear().toString().slice(2);
  const curruentMonth = currentDate.getMonth() + 1;

  let extractedDate = value.replace(/\s/g, "").replace(/\D/g, "");

  let tempDate = "";

  for (let i = 0; i < extractedDate.length; i++) {
    tempDate += extractedDate[i];
    if (tempDate.length === 2) {
      tempDate += "/";
    }
  }
  if (tempDate.length > 9) {
    tempDate = tempDate.slice(0, 9);
  }
  let newDate = tempDate.split("/");
  let isValid =
    newDate[0] !== "00" &&
    newDate[1] !== "00" &&
    newDate[2] !== "0000" &&
    +newDate[0] <= (+newDate[1] % 7) % 2 == 0
      ? 30
      : 31 && +newDate[1] <= 12 && +newDate[1] < curruentYear;
  return { tempDate, isValid };
};

// this will work as fake api adding delay in response
export const delay = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });

export const validateEmail = (email) => {
  // Regular expression to validate email formats
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
};
