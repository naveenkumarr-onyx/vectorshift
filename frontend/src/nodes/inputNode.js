// inputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
// hello
export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div
      style={{
        width: 200,
        height: 100,
        border: "1px solid black",
        padding: "5px",
      }}
    >
      <div>
        <span>Input</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label
          style={{
            display: "flex",
          }}
        >
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};