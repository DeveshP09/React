import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/buttonsContainer";
import {useState} from "react";

function App() {
  const [calVal, setcalVal] = useState("");
const onButtonClick = (buttonText) => {
  if(buttonText == "C"){
     setcalVal("");
  }
  else if(buttonText == "="){
    const result = eval(calVal); //eval automatically calculate the result
    setcalVal(result);
  }
  else{
    const newDisplayValue = calVal + buttonText;
    setcalVal(newDisplayValue);
  }
};


  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick= {onButtonClick}></ButtonsContainer>
        
     
    </div>
  );
}

export default App;
