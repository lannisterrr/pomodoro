import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { usePomodoroContext } from '../context/state-context';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const TODO = ({ toggleModal, task, setCurr_todo }) => {
  const navigate = useNavigate();
  const { dispatch } = usePomodoroContext();
  const handleTODOEdit = () => {
    setCurr_todo(task);
    toggleModal(true);
  };

  return (
    <div className="mx-auto flex justify-around mb-3">
      <div className="p-2 flex">
        <span
          className="text-2xl mr-4 cursor-pointer select-none"
          onClick={() =>
            dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id })
          }
        >
          {task.completed ? '✅' : '❌'}
        </span>
        <h4
          onClick={() => navigate(`/task/${task.id}`)}
          class={`font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700 hover:underline hover:cursor-pointer ${
            task.completed && 'line-through hover:line-through'
          }`}
        >
          {task.title}
        </h4>
      </div>

      <div className="flex gap-6 ">
        <FiEdit size="24" onClick={handleTODOEdit} className="cursor-pointer" />
        <BsFillTrashFill
          size="24"
          onClick={() => dispatch({ type: 'DELETE_TODO', payload: task.id })}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
