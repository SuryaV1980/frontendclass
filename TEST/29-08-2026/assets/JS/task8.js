const students = [
  { name: "Marshal", mark: 85 },
  { name: "McClane", mark: 65 },
  { name: "Patrick", mark: 90 },
  { name: "Bruce wayne", mark: 70 }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].mark > 75) {
    console.log(students[i]);
  }
}