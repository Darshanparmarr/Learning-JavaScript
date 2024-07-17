var arr = ["adsadda", 232,'afafas', 32, 'adda' ,2342]
var sum = 0;
arr.forEach(function(elem){
  if (typeof elem === 'number'){
    sum = sum + elem;
  }
})
console.log(sum);