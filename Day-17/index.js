// Promise
function getData() {
  // console.log("Inside function")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = fetch("https://fakestoreapi.com/products"); // backend api call ->  false
      if (result) {
        resolve("Data successfully recevied.");
      } else {
        reject("Failed.");
      }
    }, 4000);
  });
}
getData()
  .then((response) => {
    console.log(response, "response");
  })
  .catch((error) => {
    console.error(error, "error");
  });
