// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//       onDat(selectedDates[0]);
//   },
// };
// flatpickr("#datetime-picker", options);

// const btn = document.querySelector("button[data-start]");
// const day = document.querySelector("span[data-days]");
// const hour = document.querySelector("span[data-hours]");
// const minute = document.querySelector("span[data-minutes]");
// const second = document.querySelector("span[data-seconds]");
// btn.addEventListener('click', onClick);

// let timerTime = null;
// const date = new Date();

// function onDat(dat) {
//     timerTime = dat.getTime() - date;
//     if (timerTime > 0) {
//         btn.removeAttribute("disabled");
//     } else {
//         Notiflix.Notify.failure('Please choose a date in the future');
//     }
// }

// function onClick() {
//     let intervalId = setInterval(() => {
//         timerTime = timerTime - 1000;
//         if (timerTime > 0) { 
//             let time = convertMs(timerTime);
//             day.textContent = time.days;
//             hour.textContent = time.hours;
//             minute.textContent = time.minutes;
//             second.textContent = time.seconds;
//         } else {
//             btn.setAttribute("disabled", '');
//             clearInterval(intervalId);
//         }
//     }, 1000)
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log("hello");












const form = document.querySelector(".form");
// console.log(form);

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    // console.log("Hi");

    // console.dir(form.elements.step.value)

    let delay = Number(form.elements.delay.value);
    const step = Number(form.elements.step.value);

    for (i = 1; i <= form.elements.amount.value; i++){
        createPromise(i, delay)
        delay = delay + step;
    }
}



//  function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// let promise;


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
          res({ position: position, delay: delay});
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
          rej({ position: position, delay: delay});
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay)
  })
}

createPromise()
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


// createPromise(0, 1000)










// const promise = new Promise((res, rej) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             res('УРАААА 😎')
//         } else {
//             rej('Біда 😥')
//         }
//     }, 3000)
// })


// // console.log(promise);

// promise.then((value) => {
//         console.log(value)
//         return value + "🙈";
//     }, (err) => {
//         console.log(err)
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(()=>{

//     })