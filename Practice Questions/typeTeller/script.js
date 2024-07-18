function typeteller(arg){
  return typeof arg;
}
console.log(typeteller([]));
console.log(typeteller("Darshan"));
console.log(typeteller(232));
console.log(typeteller(true));
console.log(typeteller());
console.log(typeteller(function(){ }));