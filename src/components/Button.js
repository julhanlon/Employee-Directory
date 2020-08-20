import React from "react";

const Button = (props) => {
  const styles = {
    button: {
      marginRight: "10px",
      width: "80px",
    },
  };

  return (
    <button
      className={`btn waves-effect waves-light btn-dark ${props.color}`}
      style={styles.button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;