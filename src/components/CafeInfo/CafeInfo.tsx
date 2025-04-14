import css from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <div className={css.container}>
      <p className={css.title}>Sip Happens Café</p>
      <h1 className={css.description}>
        Please rate our service by selecting one of the options below.
      </h1>
    </div>
  );
}
