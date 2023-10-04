import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;
    if (
      eneteredAmount.trim().length == 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount</p>}
    </form>
  );
}