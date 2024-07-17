var arr = [
  {name : "Darshan", Gender : "Male"},
  {name : "Darshana", Gender : "Female"},
  {name : "Darshita", Gender : "female"},
  {name : "abcd", Gender : "nonspecified"},
  {name : "Darshika", Gender : "female"},
]
 
//Problem is ki ye naya array banayega
var newArr = arr.filter(function(elem){
  return elem.Gender === "Male"
})
console.log(newArr);

//Another way
var count = 0;
arr.forEach(function(elem){
  if (elem.Gender !== "Male") count++;
})

for( var i = 0; i <= count; i++){
  for (var j = 0; j < arr.length; j++){
    if(arr[j].Gender !== "Male"){
      arr.splice(j, 1);
    }
  }
}
console.log(arr);