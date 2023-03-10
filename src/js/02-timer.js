import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      onDat(selectedDates[0]);
  },
};
flatpickr("#datetime-picker", options);

const btn = document.querySelector("button[data-start]");
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");
btn.addEventListener('click', onClick);

let timerTime = null;
const date = new Date();

function onDat(dat) {
    timerTime = dat.getTime() - date;
    if (timerTime > 0) {
        btn.removeAttribute("disabled");
    } else {
        Notiflix.Notify.failure('Please choose a date in the future');
    }
}

function onClick() {
    let intervalId = setInterval(() => {
        timerTime = timerTime - 1000;
        if (timerTime > 0) { 
            let time = convertMs(timerTime);
            changeNumber(time);
            btn.setAttribute("disabled", '');
        } else {
            // btn.setAttribute("disabled", '');
            clearInterval(intervalId);
        }
    }, 1000)
}

function changeNumber(time) {
    day.textContent = addLeadingZero(time.days);
    hour.textContent = addLeadingZero(time.hours);
    minute.textContent = addLeadingZero(time.minutes);
    second.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value){
    if(value < 10){
    return "0" + value;
    } 
    return value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}