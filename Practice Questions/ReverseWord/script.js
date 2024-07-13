var str = "saare jaha se accha hindustaan humara";
var savedStrArray = str.split(" ")
  .map(function (word){
    return word.split("").reverse().join("")
  })
console.log(savedStrArray.join(" "))