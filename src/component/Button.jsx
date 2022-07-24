import style from "./Button.module.css";
import indexRandom from "../utils/random";
import data from "../data/quotes.json";
import colors from "../data/colors.json";

const Button = ({ setQuote, setColor }) => {
  const quotesAndColorRandom = () => {
    setQuote(indexRandom(data));
    setColor(indexRandom(colors));
  };

  return (
    <button onClick={quotesAndColorRandom} className={style.button}>
      Next
    </button>
  );
};

export default Button;
