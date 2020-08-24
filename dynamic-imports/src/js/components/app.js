import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import Logo from "../../images/platzi.png";
import Video from "../../video/que-es-core.mp4";
import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";

console.log(data);
function App() {
  const [loaderList, setloaderList] = useState([]);

  async function handleClick() {
    setloaderList(data.loaders);
    const { alerta } = await import("./alert.js");
    alerta("omg, este modulo ha cargado dinamicamente");
  }

  return (
    <>
      <p className="sass">Esto es sass</p>
      <p className="less">Esto es less</p>
      <p className="stylus">Esto es stylus</p>
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
