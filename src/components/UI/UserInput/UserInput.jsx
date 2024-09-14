import React from 'react';
import classes from './UserInput.module.css'

function UserInput({onButtonClick, inputRef}) {
    return (
      <div className={classes.userInput}>
        <p>Enter the text: </p>
        <input placeholder='Text' ref={inputRef} />
        <button onClick={onButtonClick}>Click</button>
      </div>
    );
  }
  

export default UserInput;
