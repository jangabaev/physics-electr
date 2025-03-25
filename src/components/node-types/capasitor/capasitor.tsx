import { Handle, Position } from '@xyflow/react'
import React, { memo } from 'react'

const CapasitorType = memo(({ data, isConnectable}) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div className=''>
        <img src="/assets/capasitor-png.png" alt="" className='w-[50px] h-[50px]' />
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
  )
})

export default CapasitorType
