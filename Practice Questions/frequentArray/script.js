function  freq(arr){
  var freq = {};
  arr.forEach(function (element)  {
    if (freq.hasOwnProperty(element)) freq[element]++;
    else freq[element] = 1;
  });
  var ans = Object.keys(freq).reduce(function(acc, next){
    return freq[acc] > freq[next] ? acc : next;
  })
  console.log(ans);
}
freq([1,2,3,4,2,3,1,2,32,32,12])