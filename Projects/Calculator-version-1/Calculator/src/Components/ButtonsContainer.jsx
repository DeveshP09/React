import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "_",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonsName.map((buttonsName) => (
        <button className={styles.button}>{buttonsName}</button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
