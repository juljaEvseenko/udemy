import { useReducer } from "react";
import { Button } from "../Button";

const ACTION = Object.freeze({
  increment: "increment-count",
  decrement: "decrement-count",
  valueToAdd: "change-value-to-add",
  newValue: "set-new-initial-value",
});

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTION.decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    case ACTION.valueToAdd:
      return {
        ...state,

        valueToAdd: action.payload,
      };
    case ACTION.newValue:
      return {
        ...state,

        valueToAdd: 0,
        count: state.count + state.valueToAdd
      };
    default:
        // 1
        throw new Error('unexpected action state: ' + action.type);
        // 2
        return state;
  }
};

export const Counter = ({ initialCount = 0 }) => {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: ACTION.increment,
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: ACTION.decrement,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();

    // setCount(valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ACTION.newValue,
    });
  };

  const valueToAddHandler = (event) => {
    const value = +event.target.value;

    dispatch({
      type: ACTION.valueToAdd,
      payload: value,
    });

    // setValueToAdd(value);
  };

  console.log(state);
  return (
    <div>
      <p>Count is {state.count}</p>

      <Button onClick={increment}> increment </Button>
      <Button onClick={decrement}> decrement </Button>

      <form onSubmit={formHandler}>
        <label>Add initial</label>
        <input
          type="number"
          className="p-1 m-3 border border-300-gray"
          value={state.valueToAdd || ""}
          onChange={valueToAddHandler}
        />

        <Button> Click! </Button>
      </form>
    </div>
  );
};
