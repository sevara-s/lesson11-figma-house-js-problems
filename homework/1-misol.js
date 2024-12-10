// solution1

function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < a.length; i++) {
    sum1 += a[i] ** 2;
  }

  for (let j = 0; j < b.length; j++) {
    sum2 += b[j] ** 3;
  }

  if (sum1 > sum2) {
    return true;
  } else {
    return false;
  }
}
// optimal solution:
function arrayMadness(a, b) {
  return (
    a.reduce((sum1, num) => sum1 + num ** 2, 0) >
    b.reduce((sum2, num2) => sum2 + num2 ** 3, 0)
  );
}
