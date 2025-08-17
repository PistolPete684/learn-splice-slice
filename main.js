function threeInOne(arr){
  // create a tabulation array
  let result = [];
  // loop through the array three digits at a time
  for (let i = 0; i < arr.length; i += 3) {
    // create a copy of the  next three digits of the array
    let group = arr.slice(i, i + 3);
    // add the three digits together
    let sum = group.reduce((a, b) => a + b, 0);
    // push the total to the results tab array
    result.push(sum);
    
  }
  return result;
}

// splice removes a part of an array and can replace it with another part you provide, or just leave it contracted