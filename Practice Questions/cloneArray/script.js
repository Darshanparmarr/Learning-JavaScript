function cloneArr(arr){
  return [...arr];
}
var newArr = cloneArr([1, 2, 3, 4]);
console.log(newArr);

// Another Way
function cloneArr2(arr2){
  var newArr2 = [];
  arr2.forEach(function (e) {
    newArr2.push(e);
  });
  return newArr2;
}

var abcd = [1,2,3,4];
var newArr2 = cloneArr2(abcd);
console.log(newArr2);
newArr2.pop();
console.log(newArr2);

function cloneArr3(arr3){
  return arr3.map(function (e){
    return e;
  })
}
var newArr3 = cloneArr3([1, 2, 3, 4, 5]);
console.log(newArr3);