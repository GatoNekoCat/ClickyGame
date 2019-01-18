import React from "react";

const Column = props => {
  return (
    <div className='col'>
      {props.children}
    </div>
  );
};

export default Column;