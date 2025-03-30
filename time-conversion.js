function timeConversion(s) {
  const [time, ampm] = s.split(/(AM|PM)/i);
  const [hours, minutes, seconds] = time.split(":");
  let time24hours = parseInt(hours);

  if (ampm.toUpperCase() === "PM" && time24hours !== 12) {
    time24hours += 12;
  } else if (ampm.toUpperCase() === "AM" && time24hours === 12) {
    time24hours = 0;
  }

  const date = new Date();
  date.setHours(time24hours, parseInt(minutes), parseInt(seconds), 0);

  const getTimes = date.toLocaleString("id-ID", { hour12: false }).split(", ")[1];
  return getTimes.split(".").join(":");
}

console.log(timeConversion("07:05:45PM"));
