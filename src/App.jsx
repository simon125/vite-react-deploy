import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container" style={{ marginTop: "40vh" }}>
      <article
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <button onClick={() => setCount((p) => p + 1)}>+1</button>
        <input type="text" value={count} readOnly style={{ margin: 0 }} />
        <button onClick={() => setCount((p) => p - 1)}>-1</button>
      </article>
    </main>
  );
}

export default App;
