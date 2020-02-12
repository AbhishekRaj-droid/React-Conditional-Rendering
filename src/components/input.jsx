import React from "react";

function Input(prompts) {
  return <input type={prompts.type} placeholder={prompts.placeholder} />;
}

export default Input;
