// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   // your code
// }

// delay(3000).then(() => alert('runs after 3 seconds'));
////////////////////////////////// CODE IN THIS FILE DOESN"T RUN. VERY VERY STRANGE //////////////////////////////////////////////
/////////////////////////////////  CMD DOES NOT RECOGNIZE THIS FILE ////////////////////////////////////////////////////////////

function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

delay(3000).then(() => console.log("runs after 3 seconds"));
