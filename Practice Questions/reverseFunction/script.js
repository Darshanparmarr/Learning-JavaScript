function reverseKaro(num){
  var rev = 0;
  while(num > 0){
    var rem = num%10;
    rev = rev*10 + rem;
    num = Math.floor(num/10);
  }
  return rev;
}
console.log(reverseKaro(7890));



//Another Way

function reverseKaro2(num){
  return Number(num.toString().split("").reverse().join(""));
}
console.log(reverseKaro(789012312));