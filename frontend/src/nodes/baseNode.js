import React, { useState } from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({
  id,
  data,
  type,
  customFields,
  handleNameChange,
  handleTypeChange,
}) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace(`custom${type}-`, `${type.toLowerCase()}_`)
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const onNameChange = (e) => {
    setCurrName(e.target.value);
    handleNameChange && handleNameChange(e);
  };

  const onTypeChange = (e) => {
    setInputType(e.target.value);
    handleTypeChange && handleTypeChange(e);
  };

  return (
    <div className="w-[200px] h-[150px] border-[2px] border-violet-800 rounded-md p-[5px]">
      <div>
        <span>{type}</span>
      </div>
      <div className=" flex flex-col gap-[3px]">
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={onNameChange}
            className=" rounded-[5px] p-[5px]"
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={onTypeChange}>
            <option>Text</option>
            <option>File</option>
          </select>
        </label>
        {customFields}
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-value`} />
    </div>
  );
};

export default BaseNode;
