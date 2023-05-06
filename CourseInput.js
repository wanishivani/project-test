import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsvalid]= useState(true);
    const ProductNameChangeHandler = event => {
    setEnteredValue(event.target.value);
  };
  
  const ProductamountChangeHandler = event => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const ProductInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={`form-control ${!isValid ? 'Invaild':' '} ` }  >
        <label>Product id:</label>
        <input type='Number' onChange={ProductamountChangeHandler} ></input>
        <label>Product Name</label>
        <input type='text'  id='Name' onChange={ProductNameChangeHandler}></input>
        <label>Selling Price</label>
       <input type='Number' onChange={ProductInputChangeHandler}></input><br></br>
      </div>
      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default CourseInput;
