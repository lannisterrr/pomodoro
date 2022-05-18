import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { usePomodoroContext } from '../context/state-context';
export const TODO = ({ toggleModal, task, setCurr_todo }) => {
  const { dispatch } = usePomodoroContext();
  const handleTODOEdit = () => {
    setCurr_todo(task);
    toggleModal(true);
  };

  return (
    <div className="mx-auto flex justify-around mb-3">
      <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">
        {task.title}
      </h4>
      <div className="flex gap-6">
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
