import React from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { InputNode } from "./nodes/inputNode";
import { OutputNode } from "./nodes/outputNode";

const initialNodes = [
  {
    id: "1",
    type: "inputNode",
    data: {
      inputName: "Input 1",
      inputType: "Text",
    },
    position: {
      x: 100,
      y: 100,
    },
  },
  {
    id: "2",
    type: "outputNode",
    data: {
      inputName: "Output 1",
      inputType: "Text",
    },
    position: {
      x: 400,
      y: 100,
    },
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "1-value",
    targetHandle: "2-input",
  },
];
const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
};
const EdgesConnect = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      />
    </ReactFlowProvider>
  );
};

export default EdgesConnect;
