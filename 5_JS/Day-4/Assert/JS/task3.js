let mark = 85

if(mark<0 || mark > 100){
  console.log("invalid mark");
}
else if(mark < 35){
  console.log("Fail");
}
else if (mark < 50){
  console.log("C");
  
}
else if (mark < 74){
  console.log("B");
  
}
else if (mark < 90){
  console.log("A");
  
}
else{
  console.log("A+");
  
}