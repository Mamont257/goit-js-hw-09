import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// let dat = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   dat = selectedDates[0].getTime();
      onDat(selectedDates[0]);
  },
};

flatpickr("#datetime-picker", options);

const btn = document.querySelector("button[data-start]");
btn.addEventListener('click', onClick);


function onDat(dat) {
    let x = dat.getTime() - date;
    if (x > 0) {
        console.log(true);
        btn.removeAttribute("disabled");
        // console.log(convertMs(x));

        setInterval(() => { console.log(convertMs(x)) }, 1000)



    } else {
        console.log(false);
        window.alert("Please choose a date in the future")
    }


    // console.log(dat);
    // console.log(dat.getDay());
    // console.log(dat.getHours());
    // console.log(dat.getMinutes());
    // console.log(dat.getSeconds());
}

function onClick(evt) {
    console.log(evt);
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}






const date = new Date();

// console.log(date.getTime());





// if ()