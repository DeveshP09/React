import { useSelector } from "react-redux";

const DisplayCounter = () => {

  const counter = useSelector(store => store.counter);  // Takes the value of counter from store 
                                                        // useSelector gives the specific part or slice of our store 
  return (
    <p className="lead mb-4">
     Counter current value : {counter}
    </p> 
  );
};

export default DisplayCounter;
