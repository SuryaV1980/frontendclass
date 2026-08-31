const student = {
  name: "Marsh",
  age: 22,
  course: "Computer Science",
  mark: 88
};

for (let key in student) {
  console.log(student[key]);
}