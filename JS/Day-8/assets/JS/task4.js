const student = [
{
  name: "Marshall",
  mark: 89
},
{
  name: "Astin",
  mark: 76
},
{
  name: "Mark",
  mark: 90
},
{
  name: "steven",
  mark: 65
},
{
  name: "peter",
  mark: 80
}
]

let name = ""

for(let i = 0; i < student.length;i++ ){
  name += student[i]
  if(student[i].mark > 80 ){
    console.log(student[i].name);
    
  }

}