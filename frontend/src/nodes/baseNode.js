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
    <div className="max-w-[250px] max-h-[200px] border-[2px] border-violet-800 rounded-md p-[10px] flex flex-col gap-2">
      <div>
        <span className="text-violet-800">{type}</span>
      </div>
      <div className="flex flex-col gap-[15px]">
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={onNameChange}
            className="rounded-[5px] p-[5px] border border-violet-800 focus:outline-none"
          />
        </label>
        <label className="flex gap-1">
          Type:
          <select
            value={inputType}
            onChange={onTypeChange}
            className="w-full border-[1px] border-violet-800 rounded-md focus:outline-none"
          >
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
