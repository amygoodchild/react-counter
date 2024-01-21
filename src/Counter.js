import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 
  const [amt, setAmt] = useState(1);
  const [validationMessage, setValidationMessage] = useState('');

  const handleCount = (val) => {
    setCount((prev) => prev + val);
  }

  const handleReset = () => {
    setCount(0);
    setAmt(1);
    setValidationMessage("");
  }  

  const handleChangeAmt = ({target}) => {
    let val = parseInt(target.value, 10);
    if (!isNaN(val) && val > 0) {
      setValidationMessage("");
      setAmt(val);
    } else {
      if (isNaN(val)) setValidationMessage("Must be a number");
      if (val <= 0) setValidationMessage("Must be over 0")
      setAmt(target.value);
    }
  };

  const onZero = (count - amt) < 0;
  const noAdd = validationMessage.length > 0;
  const onMaxNum = (count + amt) > 999999;

  return (
    <div className="counter-holder"> 
      <button onClick={() => handleCount(amt)} disabled={onMaxNum || noAdd}>Count up</button>
      <div className="count-display">{count}</div> 
      <button onClick={() => handleCount(-amt)} disabled={onZero || noAdd}>Count down</button>
      
      <div className="amt-holder">
        <div className="amt-instructions">Increment amount:</div>
        <input value={amt} onChange={handleChangeAmt} />
        {validationMessage && <div className="validation-message">{validationMessage}</div>}
      </div>
      

      <button className="reset-button" onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default Counter;