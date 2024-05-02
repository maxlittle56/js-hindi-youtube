//Dates

// ********************** Creating Date Objects *****************************

// Current date and time
let currentDate = new Date();

// Specific date and time (year, month, day, hour, minute, second)
let specificDate = new Date(2024, 4, 1, 12, 30, 0);


// ********************** Getting Date Components *****************************

let date = new Date();

// Get the year (4 digits)
let year = date.getFullYear();

// Get the month (0-11)
let month = date.getMonth(); // January is 0, December is 11

// Get the day of the month (1-31)
let day = date.getDate();

// Get the day of the week (0-6)
let dayOfWeek = date.getDay(); // Sunday is 0, Saturday is 6

// Get the hour (0-23)
let hour = date.getHours();

// Get the minutes (0-59)
let minutes = date.getMinutes();

// Get the seconds (0-59)
let seconds = date.getSeconds();

// Get the milliseconds (0-999)
let milliseconds = date.getMilliseconds();


// ********************** Formatting Dates *****************************

let date2 = new Date();

// Convert to a string in a specific format
let dateString = date2.toLocaleDateString(); // 5/1/2024

// Or customize the format
let customDateString = date2.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}); // May 1, 2024

// Get the date and time in ISO format
let isoDateString = date2.toISOString(); // 2024-05-01T08:00:00.000Z


// ********************** Manipulating  Dates *****************************
let date3 = new Date();

// Add/subtract days
date3.setDate(date.getDate() + 7); // Add 7 days

// Add/subtract months
date3.setMonth(date.getMonth() - 1); // Subtract 1 month

// Add/subtract years
date3.setFullYear(date.getFullYear() + 1); // Add 1 year


// ********************** Comparing   Dates *****************************
let date4 = new Date(2024, 4, 1);
let date5 = new Date(2024, 3, 30);

// Compare two dates
if (date4 > date5) {
    console.log("Date 4 is later than Date 5");
} else if (date4 < date5) {
    console.log("Date 4 is earlier than Date 5");
} else {
    console.log("Both dates are equal");
}
