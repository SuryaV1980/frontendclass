import React from "react";

const student = {
  name: "Son Chaeyoung",
  age: 25,
  course: "Music",
  city: "Seoul",
};

const employee = {
  name: "John Smith",
  role: "Frontend Developer",
  salary: 50000,
  location: "New York",
};

const product = {
  name: "MacBook Air",
  price: 999,
  category: "Laptop",
  brand: "Apple",
};

const ObjectRendering = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Object Rendering
      </h1>

      {/* Task 1 */}
      <section className="mx-auto mb-8 max-w-md rounded-2xl bg-rose-400 p-6">
        <h2 className="mb-4 text-2xl font-bold">Student Details</h2>

        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Age:</strong> {student.age}
        </p>
        <p>
          <strong>Course:</strong> {student.course}
        </p>
        <p>
          <strong>City:</strong> {student.city}
        </p>
      </section>

      {/* Task 2 */}
      <section className="mx-auto mb-8 max-w-md rounded-2xl bg-blue-400 p-6">
        <h2 className="mb-4 text-2xl font-bold">Employee Details</h2>

        <p>
          <strong>Name:</strong> {employee.name}
        </p>
        <p>
          <strong>Role:</strong> {employee.role}
        </p>
        <p>
          <strong>Salary:</strong> ${employee.salary}
        </p>
        <p>
          <strong>Location:</strong> {employee.location}
        </p>
      </section>

      {/* Task 3 */}
      <section className="mx-auto max-w-md rounded-2xl bg-amber-300 p-6">
        <h2 className="mb-4 text-2xl font-bold">Product Details</h2>

        <p>
          <strong>Name:</strong> {product.name}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
      </section>
    </div>
  );
};

export default ObjectRendering;