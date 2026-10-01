import React, { useState } from "react";

const UseStateTasks = () => {

  const [count, setCount] = useState(0);

  
  const [text, setText] = useState("Hello React");

  
  const [isVisible, setIsVisible] = useState(true);


  

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-10 text-center text-3xl font-bold">
        useState Tasks
      </h1>

      {/* Task 1: Counter */}
      <section className="mx-auto mb-10 max-w-lg rounded-2xl bg-white p-8 text-center shadow-md">
        <h2 className="mb-5 text-2xl font-bold">Counter</h2>

        <p className="mb-6 text-5xl font-bold text-blue-600">{count}</p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setCount((previousCount) => previousCount + 1)}
            className="rounded-lg bg-green-500 px-5 py-2 text-white hover:bg-green-600"
          >
            Increment
          </button>

          <button
            onClick={() => setCount((previousCount) => previousCount - 1)}
            className="rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
          >
            Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-gray-600 px-5 py-2 text-white hover:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Task 2: Text Change */}
      <section className="mx-auto mb-10 max-w-lg rounded-2xl bg-blue-100 p-8 text-center shadow-md">
        <h2 className="mb-5 text-2xl font-bold">Text Change</h2>

        <p className="mb-6 text-2xl font-semibold">{text}</p>

        <button
          onClick={() => setText("Welcome to React")}
          className="rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
        >
          Change Text
        </button>
      </section>

      {/* Task 3: Hide and Show */}
      <section className="mx-auto max-w-lg rounded-2xl bg-amber-100 p-8 text-center shadow-md">
        <h2 className="mb-5 text-2xl font-bold">Hide and Show</h2>

        {isVisible && (
          <p className="mb-6 text-xl font-semibold">
            This content can be hidden and shown.
          </p>
        )}

        <button
          onClick={ setIsVisible((previousValue) => !previousValue)}
          className="rounded-lg bg-purple-500 px-5 py-2 text-white hover:bg-purple-600"
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </section>
    </main>
  );
};

export default UseStateTasks;