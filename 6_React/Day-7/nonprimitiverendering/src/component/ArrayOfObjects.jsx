import React from "react";

const students = [
  { id: 1, name: "Chaeyoung", age: 25, course: "Music" },
  { id: 2, name: "Mina", age: 26, course: "Dance" },
  { id: 3, name: "Sana", age: 25, course: "Design" },
  { id: 4, name: "Nayeon", age: 28, course: "Marketing" },
];

const products = [
  { id: 1, name: "MacBook Air", price: 999, category: "Laptop" },
  { id: 2, name: "iPhone 15", price: 799, category: "Smartphone" },
  { id: 3, name: "AirPods Pro", price: 249, category: "Audio" },
  { id: 4, name: "Apple Watch", price: 399, category: "Wearable" },
  { id: 5, name: "iPad Air", price: 599, category: "Tablet" },
];

const employees = [
  {
    id: 1,
    name: "John Smith",
    department: "Development",
    salary: 50000,
  },
  {
    id: 2,
    name: "Emma Wilson",
    department: "Design",
    salary: 45000,
  },
  {
    id: 3,
    name: "Daniel Lee",
    department: "Marketing",
    salary: 42000,
  },
  {
    id: 4,
    name: "Sophia Brown",
    department: "Human Resources",
    salary: 48000,
  },
];

const ArrayOfObjects = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-10 text-center text-3xl font-bold">
        Array of Objects Rendering
      </h1>

      {/* Task 1 */}
      <section className="mb-12">
        <h2 className="mb-5 text-center text-2xl font-bold">
          Student Details
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {students.map((student) => (
            <article
              key={student.id}
              className="w-64 rounded-2xl bg-rose-400 p-6 shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold">{student.name}</h3>

              <p>
                <strong>ID:</strong> {student.id}
              </p>

              <p>
                <strong>Age:</strong> {student.age}
              </p>

              <p>
                <strong>Course:</strong> {student.course}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Task 2 */}
      <section className="mb-12">
        <h2 className="mb-5 text-center text-2xl font-bold">
          Product Details
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {products.map((product) => (
            <article
              key={product.id}
              className="w-64 rounded-2xl bg-blue-400 p-6 shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold">{product.name}</h3>

              <p>
                <strong>Price:</strong> ${product.price}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Task 3 */}
      <section>
        <h2 className="mb-5 text-center text-2xl font-bold">
          Employee Details
        </h2>

        <div className="overflow-x-auto">
          <table className="mx-auto w-full max-w-4xl border-collapse bg-white shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Department</th>
                <th className="border p-3">Salary</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="text-center hover:bg-gray-100">
                  <td className="border p-3">{employee.id}</td>
                  <td className="border p-3">{employee.name}</td>
                  <td className="border p-3">{employee.department}</td>
                  <td className="border p-3">${employee.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default ArrayOfObjects;