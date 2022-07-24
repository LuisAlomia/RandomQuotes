import React, { useState } from "react";
import indexRandom from "./utils/random";
import Quotes from "./component/Quotes";
import Button from "./component/Button";
import data from "./data/quotes.json";
import colors from "./data/colors.json";
import style from "./App.module.css";

function App() {
  const [quotes, setQuote] = useState(indexRandom(data));
  const [color, setColor] = useState(indexRandom(colors));

  return (
    <div className={style.content}>
      <div
        className={`${style.circle} ${style.one}`}
        style={{ backgroundColor: "#B2A4FF" }}
      ></div>
      <div
        className={`${style.circle} ${style.twe}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`${style.circle} ${style.three}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`${style.circle} ${style.four}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`${style.circle} ${style.five}`}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`${style.circle} ${style.six}`}
        style={{ backgroundColor: "#B8F1B0" }}
      ></div>
      <div
        className={`${style.circle} ${style.seven}`}
        style={{ backgroundColor: color }}
      ></div>
      <div className={style.contentQuotes}>
        <Quotes quotes={quotes} />
        <Button setQuote={setQuote} setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
