// llmNode.js

import { Handle, Position } from "reactflow";

export const LLMNode = ({ id, data }) => {
  return (
    <div className="w-[200px] h-[90px] border-[2px] border-violet-800 p-[10px] rounded-md">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <div className="flex flex-col">
        <span>LLM</span>
        <span>This is a LLM.</span>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </div>
  );
};
