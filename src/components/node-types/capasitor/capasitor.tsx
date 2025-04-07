import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

const CapasitorType = memo(({ isConnectable }: { isConnectable: any }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="">
        <img
          src="/assets/capasitor-png.png"
          alt=""
          className="w-[50px] h-[50px]"
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        isConnectable={isConnectable}
      />
    </>
  );
});

export default CapasitorType;
