import { useState } from 'react';
import { usePomodoroContext } from '../context/state-context';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
export const TODO = ({
  taskName,
  toggleModal,
  task,
  curr_todo,
  setCurr_todo,
}) => {
  const { dispatch } = usePomodoroContext();

  const handleTODOEdit = () => {
    setCurr_todo(task);
    // dispatch({ type: 'EDIT_TODO', payload: task });
    toggleModal(true);
  };

  return (
    <div className="mx-auto flex justify-around mb-3">
      <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">
        {taskName}
      </h4>
      <div className="flex gap-6">
        <FiEdit size="24" onClick={handleTODOEdit} />
        <BsFillTrashFill size="24" />
      </div>
    </div>
  );
};
