import { useState } from "react";

function App() {
  const [countClicks, setCountClicks] = useState(0);

  const handleCountClick = function () {
    setCountClicks((c) => c + 1);
  };

  return (
    <div className="App">
      <button onClick={handleCountClick}>Get my position</button>
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
