function threeInOne(arr){
  // setup tab array
  let result = [];
  // itterate through the arr three numbers at a time
  for (let i = 0; i < arr.length; i +=3) {
    // take three numbers starting from i
    let group = arr.slice(i, i + 3);
    // add the three numbers together
    let sum = group.reduce((a, b) => a + b, 0);
    // push the total to the result array
    result.push(sum);
  }
  // return the result array
  return result;
}