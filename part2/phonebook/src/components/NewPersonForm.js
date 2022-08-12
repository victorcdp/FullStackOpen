import React from "react";

const NewPersonForm = ({ onSubmit, nameInputValue, nameInputOnChange, numberInputValue, numberInputOnChange}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: 
        <input 
          value={nameInputValue}
          onChange={nameInputOnChange}
        />
      </div>
      <div>
        number: 
        <input 
          value={numberInputValue}
          onChange={numberInputOnChange}
        />
      </div>
      <button type="submit">add</button>
    </form>
  )
}

export default NewPersonForm
