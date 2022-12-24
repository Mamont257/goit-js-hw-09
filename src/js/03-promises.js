





 function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
// let promise;


function createPromise(position, delay) {
  promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        res('Good');
      } else {
        rej("bed");
      }
    }, delay)
  })
    promise.then(value => console.log(value)).catch(err => console.log(err));
}


createPromise(0, 1000)