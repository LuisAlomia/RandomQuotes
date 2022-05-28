import style from "./Button.module.css";

const Button = ({ quotesAndColorRandom }) => {
  return (
    <button onClick={quotesAndColorRandom} className={style.button}>
      Next
    </button>
  );
};

export default Button;
