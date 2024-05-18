// Async Await

async function getData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products"); // 0.1 sec
    const finalResponse = await response.json();
     console.log(finalResponse, "response");
    // throw new Error("MY personal error.")
  } catch (error) {
    console.log(error);
  }
}

getData();

// const myfunction = async () =>{
// }
// {"key" : 2}
// {key : 2}

// try {
    
// } catch (error) {}
