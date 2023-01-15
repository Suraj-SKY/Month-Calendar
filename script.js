const monthsElement = document.querySelector(".date h1");
const fullDateElement = document.querySelector(".date p");
const daysElement = document.querySelector(".days");
const monthIndex = new Date().getMonth();
// month index from 0 to 11
// const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
// above line will give the last day of the current month
// console.log(lastDay);

// if we don't add 1 to monthIndex then it will give the last day of previous month

const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
console.log(firstDay);
//notes: In JS, day start form sunday, monday, tuesday, ... that's why we subtracted 1



const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// month
monthsElement.innerHTML = months[monthIndex];
// date
fullDateElement.innerHTML = new Date().toDateString();

// days in month
let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`;
    }
    else {
        days += `<div>${i}</div>`;
    }
}
daysElement.innerHTML = days;