import { Background, ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { Instruments } from "./components/instruments";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  return (
    <div className="relative h-[100vh] bg-blue-50">
      <ReactFlow nodes={initialNodes} edges={initialEdges}>
        <Background />
        <div className="absolute w-[200px] h-[100%] z-10">
          <Instruments />
        </div>
      </ReactFlow>
    </div>
  );
}
