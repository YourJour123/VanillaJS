function addEvent() {
  var eventDateInput = document.getElementById("event-date");
  var eventInput = document.getElementById("event-input");

  var date = eventDateInput.value;
  var event = eventInput.value;

  if (date && event) {
    var eventList = document.getElementById("event-list");
    var listItem = document.createElement("li");
    listItem.innerText = `${date}: ${event}`;
    eventList.appendChild(listItem);
    eventDateInput.value = "";
    eventInput.value = "";
  } else {
    alert("Please select a date and enter an event.");
  }
}
