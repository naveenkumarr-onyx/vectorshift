// outputNode.js

import BaseNode from "./baseNode";

export const OutputNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      type="Output"
      handleNameChange={(e) => console.log(e.target.value)}
      handleTypeChange={(e) => console.log(e.target.value)}
      customFields={null}
    />
  );
};
