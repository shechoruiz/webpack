import "../css/index.css";
// import text from "./text.js";
import search from "./search";
import render from "./render";

// text();

// if (module.hot) {
//   module.hot.accept("./text.js", function () {
//     console.log("He recargado en caliente");
//     text();
//   });
// }

const id = prompt("Quien es ese Pokémon?");
search(id)
  .then((data) => {
    render(data);
  })
  .catch(() => {
    console.log(`No hubo Pokémon`);
  });
