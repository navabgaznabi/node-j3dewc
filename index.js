// run `node index.js` in the terminal
function printFunction(number) {
  //iterating from 1 to 100
  for (var i = 1; i <= number; i++) {
    //if multiple of 3 and 5 both
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('amazon');
    } else if (i % 3 === 0) {
      //if multiple of 3
      console.log('google');
    } else if (i % 5 === 0) {
      //if multiple of 5
      console.log('facebook');
    } else {
      console.log(i);
    }
  }
  return;
}

printFunction(100);
