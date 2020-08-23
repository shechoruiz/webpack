import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";

console.log(data);
function App() {
  const [loaderList, setloaderList] = useState([]);

  function handleClick() {
    setloaderList(data.loaders);
  }

  return (
    <>
      Que linda aplicación hecha en React.js
      <ul>
        {loaderList.map((item) => (
          <Loader data={item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostrar lo aprendido hasta el momento
      </button>
    </>
  );
}

export default App;
