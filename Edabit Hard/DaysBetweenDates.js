// How Many Days Between Two Dates
// Create a function that takes two dates and returns the number of days between the first and second date.



const getDays = (date1, date2) => (date2 - date1) / 86400000


console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ), ': returns 6' )

console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  ), ': returns 3' )

console.log(getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) , ': returns 10' )

//My Answer

const getDays = (date1, date2) => (date2 - date1) / 86400000