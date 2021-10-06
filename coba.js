const test = (a, b) => {
  let temp = 0;
  let result = true;
  for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
    temp = (a[i] + a[i + 1]) / 2;

    console.log(temp);
    if (temp == b) {
      result = true;
      break;
    } else {
      temp = (a[i] + a[i + 2]) / 2;
      if (temp == b) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};
console.log(test([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
