const date_el = document.getElementById("date");
const month_el = document.getElementById("month");
const year_el = document.getElementById("year");
const error_el = document.getElementById("error");
const btn_el = document.getElementById("btn");

date_el.addEventListener("keyup", (event) => {
  let val = date_el.value;
  console.log(val);
  if (val > 31 || val < 1) {
    error_el.classList.remove("hidden");
    error_el.innerText = "Date should be between 1 and 31";
  } else {
    error_el.classList.add("hidden");
    error_el.innerText = "";
  }
});

month_el.addEventListener("keyup", (event) => {
  let val = month_el.value;

  if (val > 12 || val < 1) {
    error_el.classList.remove("hidden");
    error_el.innerText = "Enter valid Month-1 digit or either 2";
  } else {
    error_el.classList.add("hidden");
    error_el.innerText = "";
  }
});

year_el.addEventListener("keyup", (event) => {
  let val = year_el.value;

  if (val.length > 4 || parseInt(val) < 1900 || parseInt(val) > 2023) {
    error_el.classList.remove("hidden");
    error_el.innerText = "Enter valid 4 digit year";
  } else {
    error_el.classList.add("hidden");
    error_el.innerText = "";
  }
});

btn_el.addEventListener("click", (event) => {
  if (date_el.value === "" || error_el.innerText !== "") {
    error_el.classList.remove("hidden");
    error_el.innerText = "Enter valid values first";
  } else {
    //calculate age

    let date = date_el.value;
    let month = month_el.value;
    let year = year_el.value;

    const dob = new Date(year, month - 1, date);

    const present = new Date();

    let ms = present - dob;
    let yearsplusextra = Math.floor(ms / 1000 / 60 / 60 / 24 / 30 / 12);
    let years = yearsplusextra - 1;

    let monthsplusdays = (ms / 1000 / 60 / 60 / 24 / 30) % 12;
    let months = Math.floor(monthsplusdays);
    // console.log(months);

    let days = ((monthsplusdays - Math.floor(monthsplusdays)) * 30).toFixed();
    // console.log(days);
    error_el.classList.remove("hidden");
    error_el.innerText = `Your Age is ${years} Years ${months} Months ${days} Days. `;
  }
});
