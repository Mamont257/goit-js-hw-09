import Notiflix from 'notiflix';


const form = document.querySelector(".form");

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    let delay = Number(form.elements.delay.value);
    const step = Number(form.elements.step.value);

    for (let i = 1; i <= form.elements.amount.value; i++){
        createPromise(i, delay)
            .then(({ position, delay }) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
            .catch(({ position, delay }) => {
                Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
        delay = delay + step;
    }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
          res({ position: position, delay: delay});
      } else {
          rej({ position: position, delay: delay});
      }
    }, delay)
  })
}