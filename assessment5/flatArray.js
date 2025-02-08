function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
  }
  
  // Example usage
  console.log(flattenArray([1, [2, [3, ,8,[11,10],[4, 5]]]])); 
  