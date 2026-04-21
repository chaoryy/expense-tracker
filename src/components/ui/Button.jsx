import React from "react";

// reusable button component
// children — the text rendered between <Button> tags
// onClick — optional click handler passed from the parent
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

// export so any component in the app can use this button
export default Button;
