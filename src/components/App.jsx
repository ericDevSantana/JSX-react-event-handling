import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMouseOver, setMouseOver] = React.useState(false);

  function handleClick() {
    setHeadingText("Submitted!");
  }

  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "Black" : "White" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
