import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterAction, privacyAction } from "../Store";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterAction.increment()); // takes the action from slice rather than defining it
  };

  const handleDecrement = () => {
    dispatch(counterAction.decrement());
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyAction.toggle());
  };

  const handleAdd = () => {
    dispatch(counterAction.add({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch(counterAction.substract({ num: inputElement.current.value }));
    inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>

        <button
          type="button"
          class="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="enter number"
          className="number-input"
          ref={inputElement}
        />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
};

export default Controls;
