function capitalizeKaro(str){
  var allwords = str.split(' ').map(function(word){
    return word.charAt(0).toUpperCase()+ word.substring(1);
  })
  console.log(allwords.join(' '));
}
capitalizeKaro("jai swaminarayan das na das"); 