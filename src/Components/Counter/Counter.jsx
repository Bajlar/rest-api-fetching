import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddToCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleMinusToCount = () => {
    const newCount = count - 1;
    setCount(newCount);
    if (newCount < 0) {
      alert("Count value should not be negative");
      setCount(0);
    }
  };

  const handleResetToCount = () => {
    // const newCount = 0;
    // setCount(newCount);
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="counter-title">
        <h2 className="section-title">Counter: {count}</h2>
      </div>
      <div className="btn-group">
        <button onClick={handleAddToCount} className="btn btn-green">
          +
        </button>
        <button onClick={handleMinusToCount} className="btn btn-blue">
          -
        </button>
        <button onClick={handleResetToCount} className="btn btn-red">
          X
        </button>
      </div>
      <hr />
    </div>
  );
}
export default Counter;
