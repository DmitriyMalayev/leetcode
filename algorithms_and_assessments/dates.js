// const dateOriginal = new Date(); 
// const dString = new Date("October 13, 2014 11:13:00");
// const dSample = new Date("2022-01-25");

// // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// const dOrder = new Date(2018, 11, 24, 10, 33, 30, 0);

// dSample.getFullYear()
// dSample.getMonth()


// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// months[d.getMonth()];


// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const dWeek = new Date();
// let day = days[dWeek.getDay()];



const d1 = new Date();
d1.setFullYear(2020);

const d2 = new Date();
d2.setMonth(11);

const d3 = new Date();
d3.setDate(15);

const d4 = new Date();
d4.setDate(d4.getDate() + 50);

const d5 = new Date();
d5.setHours(23);



let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}