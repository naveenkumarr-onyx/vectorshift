// inputNode.js

import BaseNode from "./baseNode";

export const InputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Input"
      handleNameChange={(e) => console.log(e.target.value)}
      handleTypeChange={(e) => console.log(e.target.value)}
      customFields={null}
    />
  );
};
