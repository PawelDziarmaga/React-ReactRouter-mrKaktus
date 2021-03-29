import React from "react";

const Item = ({ name, picture, click }) => {
  return (
    <div onClick={click} className="item" id={name}>
      <img src={picture} alt={name} className={name} />
      <h3 className={name}>{name}</h3>
    </div>
  );
};
export default Item;
