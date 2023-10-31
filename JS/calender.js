const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");
const currentMonth = document.getElementById("current-month");
const calendarBody = document.getElementById("calendar-body");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonthIndex = date.getMonth();

function updateCalendar() {
  const firstDay = new Date(currentYear, currentMonthIndex, 1);
  const lastDay = new Date(currentYear, currentMonthIndex + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();

  currentMonth.textContent = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(firstDay);

  let days = "";

  for (let i = 0; i < firstDayIndex; i++) {
    days += "<td></td>";
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days += `<td>${i}</td>`;
    if ((i + firstDayIndex) % 7 === 0) {
      days += "</tr><tr>";
    }
  }

  calendarBody.innerHTML = days;
}

updateCalendar();

prevMonthButton.addEventListener("click", () => {
  currentMonthIndex--;
  if (currentMonthIndex < 0) {
    currentYear--;
    currentMonthIndex = 11;
  }
  updateCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentMonthIndex++;
  if (currentMonthIndex > 11) {
    currentYear++;
    currentMonthIndex = 0;
  }
  updateCalendar();
});
