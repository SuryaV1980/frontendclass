import React from "react";

const programmingLanguages = [
  "C",
  "JavaScript",
  "Java",
  "Python",
  "C++",
];

const cities = [
  "New York",
  "Tokyo",
  "Osaka",
  "Copenhagen",
  "Melbourne",
  "Fukuoka",
];

const courses = [
  "Full Stack Development",
  "Data Science",
  "Data Analytics",
  "Digital Marketing",
  "Cyber Security",
];

const ArrayRendering = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-10 text-center text-3xl font-bold">
        Array Rendering
      </h1>

      {/* Task 1 */}
      <section className="mb-10">
        <h2 className="mb-4 text-center text-2xl font-bold">
          Programming Languages
        </h2>

        <div className="mx-auto flex max-w-md flex-col gap-3 rounded-2xl bg-rose-400 p-6">
          {programmingLanguages.map((language) => (
            <p
              key={language}
              className="rounded-xl bg-white p-2 text-center"
            >
              {language}
            </p>
          ))}
        </div>
      </section>

      {/* Task 2 */}
      <section className="mb-10">
        <h2 className="mb-4 text-center text-2xl font-bold">Cities</h2>

        <div className="mx-auto flex max-w-md flex-col gap-3 rounded-2xl bg-gray-700 p-6">
          {cities.map((city) => (
            <p
              key={city}
              className="rounded-xl bg-white p-2 text-center"
            >
              {city}
            </p>
          ))}
        </div>
      </section>

      {/* Task 3 */}
      <section className="rounded-2xl bg-blue-700 p-8">
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Available Courses
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {courses.map((course) => (
            <article
              key={course}
              className="w-52 rounded-2xl bg-white p-4 text-center shadow-md transition-colors hover:bg-blue-200"
            >
              <h3 className="font-semibold">{course}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArrayRendering;