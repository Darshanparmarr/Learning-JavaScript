function checkArray(element){
  console.log(Array.isArray(element));
}
checkArray([]); // true (if we use typeOf then it will show this is also an Object)
checkArray({}); // false this is object