const users = [
    {
        name: "Ravi",
        marks: [80, 90, 85],
        address: {
            city: "Chennai"
        }
    },
    {
        name: "Kumar",
        marks: [60, 70, 75]
    }
];
// Use a for...of loop to iterate through the users array.
// Use object destructuring to directly extract name, marks, and address.
for (const { name, marks, address } of users) {
  // Use optional chaining ?. to safely access address.city even if address is missing.
// Use nullish coalescing ?? to assign "City Not Available" when the city is null or undefined
  const city = address?.city ?? "City Not Available";
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
// Use reduce() to add all values in the marks array and calculate the total marks.
// Use a template literal to display the name, city, and total marks in one string.
  console.log(`Name: ${name}, City: ${city}, Total Marks: ${totalMarks}`);
}