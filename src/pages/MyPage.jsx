import { useState } from "react";

function MyPage() {
  const [count, setCount] = useState(0);

 

  return (
    <div className="pt-20 px-10">
      <h1>My page</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
      </div>
      <h1 className="text-red-500">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default MyPage;
