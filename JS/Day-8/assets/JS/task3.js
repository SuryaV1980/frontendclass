let number =[1,2,3,4,5,6,7,8,9,10]

let save = ""

for(let i = 0; i < number.length; i++){
  save = number[i]
  if(number[i]%2==0){
    console.log("even number "+ number[i]);
    
  }
}