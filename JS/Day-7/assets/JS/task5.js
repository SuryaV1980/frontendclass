const employee =[{
  name:"Isha",
  age:22,
  position:"Cyber Security",
  salary:96000
},
{
  name:"Nithin",
  age:25,
  position:"Java Developer",
  salary:40000
},
{
  name:"Rajesh",
  age:38,
  position:"Engineer",
  salary:38000
},
{
  name:"Surya",
  age:24,
  position:"Java Developer",
  salary:100000
}
]


for(let i=0;i<employee.length;i++){
  if(employee[i].salary > 40000){
    console.log(employee[i]);
    
  }

}