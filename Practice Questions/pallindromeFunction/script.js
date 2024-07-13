function checkPallindrome(str){
  var pal;
  pal = str.split('').reverse().join('');
  if (pal === str){
    console.log("Number or String is Pallindome");
  }else{
    console.log("Number or String is not a Pallindome")
  }
}
checkPallindrome("123");