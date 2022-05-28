import style from "./App.module.css";
import React, { useState } from "react";
import Button from "./component/Button";
import Quotes from "./component/Quotes";
import data from "./quotes.json";
import logo from "./logo.svg";

const colors = [
  "#FFCC8F",
  "#FAD4D4",
  "#C1F4C5",
  "#C0D8C0",
  "#C85C5C",
  "#C7BEA2",
  "#FCF0C8",
  "#AEE1E1",
  "#DFBAF7",
];

function App() {
  const numberRandom = (array) => Math.floor(Math.random() * array.length);

  const indexRandom = (array) => {
    const index = numberRandom(array);
    return array[index];
  };

  const [quotes, setQuote] = useState(indexRandom(data));
  const [color, setColor] = useState(indexRandom(colors));

  const quotesAndColorRandom = () => {
    setQuote(indexRandom(data));
    setColor(indexRandom(colors));
  };

  return (
    <>
      <nav className={style.navBar} style={{ backgroundColor: color }}>
        <img className={style.logo} src={logo} alt="logo" />
      </nav>
      <div className={style.containerApp} style={{ backgroundColor: color }}>
        <div className={style.App}>
          <Quotes quotes={quotes} />
          <Button quotesAndColorRandom={quotesAndColorRandom} />
        </div>
      </div>
    </>
  );
}

export default App;
