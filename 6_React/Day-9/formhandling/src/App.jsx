import { useState } from "react";

const App = () => {

  // Task 1 States
  const [nameUser, setNameUser] = useState("");

  // Task 2 States
  const [emailUser, setEmailUser] = useState("");
  const [showEmail, setShowEmail] = useState("");


  // Task 1 - Name Change
  const handleName = (e) => {

    setNameUser(e.target.value);

  };


  // Task 2 - Email Change
  const handleEmail = (e) => {

    setEmailUser(e.target.value);

  };


  // Task 2 - Form Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    setShowEmail(emailUser);

    setEmailUser("");

  };


  return (
    <>

      {/* TASK 1 - NAME INPUT */}

      <div>

        <h2>Task 1 - Name Input</h2>

        <input
          type="text"
          value={nameUser}
          onChange={handleName}
          placeholder="Enter the Name"
        />

        <p>Name: {nameUser}</p>

      </div>


      <hr />


      {/* TASK 2 - EMAIL SUBMIT */}

      <div>

        <h2>Task 2 - Email Submit</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            value={emailUser}
            onChange={handleEmail}
            placeholder="Enter the Email"
          />

          <button type="submit">
            Submit
          </button>

        </form>

        <p>Email: {showEmail}</p>

      </div>

    </>
  );
};

export default App;