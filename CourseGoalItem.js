import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  return (

    <li className="goal-item" onClick={deleteHandler}>
      <h1>Products</h1>
      <button onClick={deleteHandler}>Delete</button>
      {props.children}
      <h1>total Products</h1>

    </li>
  );
};

export default CourseGoalItem;
