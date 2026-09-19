import { useState } from "react";
import Button from "./Button";
import Input from "./input";
import Card from "./Card";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  
  const [cardText, setCardText] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setCardText(inputValue);
  };

  return (
    <>
     
      <h1>Hello universe</h1>
      <p>Type in the box below and click the button to see it on the card!</p>

    
      <Input value={inputValue} onChange={handleInputChange} />
      <Button onClick={handleButtonClick} />
      <Card text={cardText} />
    </>
  );
};

export default App;