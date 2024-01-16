function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);

  let amOrPm = hours <= 12 ? "AM" : "PM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${seconds} ${amOrPm}`;

  document.getElementById("clock").innerText = time;
}

updateClock();
setInterval(updateClock, 1000);
