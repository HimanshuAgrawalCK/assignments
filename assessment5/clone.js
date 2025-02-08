function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const obj = { a: 1, b: { c: [1,2,3,4,5] } };
const clonedObj = deepClone(obj);
clonedObj.b.c = 42;
console.log(obj.b.c);
console.log(clonedObj.b.c)
