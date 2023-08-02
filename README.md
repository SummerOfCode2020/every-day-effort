# Every Day Effort

A daily journal that keeps git and coding skills strong and logs learning actions

## Make a push to github every day for 10 Weeks

Track notes and progress here

## Get to 50 Pull Requests or more in 10 Weeks

Track notes and progress here

## Write 100 Functions or more in 10 Weeks

Track notes and progress here

Samples of very simple functions that can be the start and grow more complex as you go:

```
/**
 * Calculates the sum of two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The sum of num1 and num2.
 */
function add(num1, num2) {
  return num1 + num2;
}
```

```
/**
 * Calculates the difference between two numbers.
 *
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} The difference between num1 and num2.
 */
function subtract(num1, num2) {
  return num1 - num2;
}
```

Something complex could be like this for example:

```
/**
 * Performs matrix multiplication of two matrices.
 *
 * This function takes two 2D matrices and multiplies them to produce the resulting matrix.
 *
 * @param {number[][]} matrix1 - The first matrix represented as a 2D array.
 * @param {number[][]} matrix2 - The second matrix represented as a 2D array.
 * @returns {number[][]} The resulting matrix after multiplication.
 * @throws {Error} If the matrices cannot be multiplied (incompatible dimensions).
 */
function matrixMultiplication(matrix1, matrix2) {
  // Check if the matrices can be multiplied (compatible dimensions)
  const m1Rows = matrix1.length;
  const m1Cols = matrix1[0].length;
  const m2Rows = matrix2.length;
  const m2Cols = matrix2[0].length;

  if (m1Cols !== m2Rows) {
    throw new Error('Matrix multiplication is not possible due to incompatible dimensions.');
  }

  // Initialize the resulting matrix with zeros
  const resultMatrix = new Array(m1Rows);
  for (let i = 0; i < m1Rows; i++) {
    resultMatrix[i] = new Array(m2Cols).fill(0);
  }

  // Perform matrix multiplication
  for (let i = 0; i < m1Rows; i++) {
    for (let j = 0; j < m2Cols; j++) {
      for (let k = 0; k < m1Cols; k++) {
        resultMatrix[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return resultMatrix;
}
```

## Write 100 Loops or more in 10 Weeks

Track notes and progress here

Basic samples:

```
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```


```
const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```


More samples:

```
const mySet = new Set([1, 2, 3, 4, 5]);

for (const item of mySet) {
  console.log(item);
}
```

```
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    console.log(i, j);
    if (i === 1 && j === 1) {
      break outerLoop;
    }
  }
}
```

## Write 100 conditional statements or more in 10 Weeks

Track notes and progress here

## Write 100 mocha tests or more in 10 Weeks

Track notes and progress here

# Breaking it down by weeks

<https://github.com/SummerOfCode2020/week-06-homework-10-10-10-challenge>

<https://github.com/SummerOfCode2020/week-07-homework-10-10-10-challenge>
