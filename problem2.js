// run `node problem2.js` in the terminal
let TEST_CASE1 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 90,
    chemistry: 81,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 95,
    chemistry: 96,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 85,
    chemistry: 86,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

let TEST_CASE2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
  },
];

//To run a test case: add the test case at top and then call the funcion sortGivenObject at the end

const sortGivenObject = (testCase) => {
  testCase.sort((obj1, obj2) => {
    var totalSum1 = obj1.biology + obj1.chemistry;
    var totalSum2 = obj2.biology + obj2.chemistry;

    if (totalSum1 < totalSum2) {
      return 1;
    } else if (totalSum1 > totalSum2) {
      return -1;
    } else {
      if (obj1.biology < obj2.biology) {
        return 1;
      } else if (obj1.biology > obj2.biology) {
        return -1;
      } else {
        let x = new Date(obj1.dob);
        let y = new Date(obj2.dob);
        return y - x;
      }
    }
  });
  console.log('::::::::::::::::::TEST_CASE:::::::::::::::::::');
  console.log(testCase);
};

sortGivenObject(TEST_CASE1);
sortGivenObject(TEST_CASE2);
