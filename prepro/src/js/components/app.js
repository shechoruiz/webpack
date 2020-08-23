import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import Logo from "../../images/platzi.png";
import Video from "../../video/que-es-core.mp4";

console.log(data);
function App() {
  const [loaderList, setloaderList] = useState([]);

  function handleClick() {
    setloaderList(data.loaders);
  }

  return (
    <>
      Que linda aplicación hecha en React.js
      <video src={Video} width={360} controls poster={Logo}></video>
      <p>
        <img src={Logo} alt="" width={40} />
      </p>
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
