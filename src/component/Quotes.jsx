import style from "./Quotes.module.css";

const Quotes = ({ quotes }) => {
  return (
    <article className={style.quoteContainer}>
      <p className={style.quote}>{quotes?.quote}</p>
      <p className={style.author}>{quotes?.author}</p>
    </article>
  );
};

export default Quotes;
