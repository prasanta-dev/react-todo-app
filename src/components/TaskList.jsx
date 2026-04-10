import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

function TaskList({ addText, handelTick, handelDelete }) {
  return (
    <div className='max-w-auto sm:w-100 min-w-80 p-2 bg-sky-900 rounded-b-3xl'>
      <ul>
        {addText.map((taskObj) => {
          return <li className={`${(taskObj.completed) ? "bg-green-700" : "bg-gray-800"} m-2 p-2 rounded-sm flex justify-between px-3 wrap-break-word break-all text-base`} key={taskObj.id}> {taskObj.text}
            <div className='flex items-center gap-4 text-xl text-white'>
              <button onClick={() => handelTick(taskObj.id)} className='cursor-pointer'> {(taskObj.completed) ? <IoIosCloseCircleOutline /> : <IoMdCheckmarkCircleOutline /> } </button>
              <button onClick={() => handelDelete(taskObj.id)} className='cursor-pointer'><RiDeleteBin6Line /></button>
            </div>
          </li>

        })}
      </ul>
    </div>
  )
}

export default TaskList