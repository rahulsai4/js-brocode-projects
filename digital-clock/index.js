function updateClock() {
  let clock = document.getElementById("clock");
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, 0);
  let minutes = date.getMinutes().toString().padStart(2, 0);
  let seconds = date.getSeconds().toString().padStart(2, 0);
  clock.textContent = `${hours}: ${minutes}: ${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
