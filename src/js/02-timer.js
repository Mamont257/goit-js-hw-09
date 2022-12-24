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
      onDat(selectedDates[0].getTime());
  },
};

flatpickr("#datetime-picker", options);

const btn = document.querySelector("button[data-start]");
// console.log(dat);


function onDat(dat) {
    console.log(dat);
    if (dat > date) {
        console.log(true);
        btn.removeAttribute("disabled");
    } else {
        console.log(false);
    }
}






const date = new Date();

// console.log(date.getTime());





// if ()