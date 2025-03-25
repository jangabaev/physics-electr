import {
  addEdge,
  Background,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { Instruments } from "./components/instruments";
import { useCallback, useRef } from "react";
import { useDnD, DnDProvider } from "./components/provider-dnd";
import { CapisatorType } from "./components/node-types";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "An input node" },
    position: { x: 0, y: 50 },
    sourcePosition: "right",
  },
  {
    id: "2",
    type: "capisator",
    data: { label: "dldl" },
    position: { x: 300, y: 50 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output A" },
    position: { x: 650, y: 25 },
    targetPosition: "left",
  },
  {
    id: "4",
    type: "output",
    data: { label: "Output B" },
    position: { x: 650, y: 100 },
    targetPosition: "left",
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function ReactFlowProps() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = {
    capisator: CapisatorType,
  };
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [],
  // );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      console.log(event);
      console.log(type);
      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );

  return (
    <ReactFlowProvider>
      <div
        className="dndflow relative max-h-[100vh] h-[100vh] w-full"
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
        </ReactFlow>
        <div className="absolute left-0 top-0 z-10 bg-amber-200 h-[100%]">
          <Instruments />
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <ReactFlowProps />
    </DnDProvider>
  </ReactFlowProvider>
);
