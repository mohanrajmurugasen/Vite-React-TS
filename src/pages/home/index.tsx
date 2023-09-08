import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <div>Count: {count}</div>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
    </div>
  );
};

export default Home;
