import style from "./Quotes.module.css";

const Quotes = ({ quotes }) => {
  return (
    <>
      <p className={style.quote}>{quotes.quote}</p>
      <p className={style.author}>{quotes.author}</p>
    </>
  );
};

export default Quotes;
