import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Check = ({isCompleted}) => {
  return (
    <div>
        {isCompleted && <FaCheck />}
    </div>
    
  )
}

export default Check