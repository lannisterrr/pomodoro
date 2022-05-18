import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { usePomodoroContext } from '../context/state-context';
import { TODO } from './TODO';
import Modal from './Modal';
function AddTask() {
  const [curr_todo, setCurr_todo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { state } = usePomodoroContext();

  const handleShowModal = toggle => {
    setShowModal(toggle);
  };

  const handleAddTodo = () => {
    handleShowModal(true);
  };

  return (
    <>
      <div className="w-screen flex-col justify-center items-center min-h-screen bg-primary">
        <h1 class="text-3xl md:text-5xl p-4 font-normal leading-normal mt-0 mb-2 text-secondary text-center">
          Schedule your tasks right now!!
        </h1>
        <main className="mx-auto flex-1 bg-white max-w-[90%] md:max-w-[80%] min-h-[70vh] rounded-lg">
          <div className="flex justify-between">
            <p className="font-mono p-2 text-xl font-bold"> To-Do List</p>
            <CTAIcon
              icon={<BsPlus size="32" onClick={handleAddTodo} />}
              text="Add task"
            />
          </div>
          {state.tasks.map(task => (
            <TODO
              key={task.id}
              taskName={task.title}
              toggleModal={handleShowModal}
              taskId={task.id}
              task={task}
              curr_todo={curr_todo}
              setCurr_todo={setCurr_todo}
            />
          ))}
        </main>
      </div>
      {showModal && (
        <Modal
          toggleModal={handleShowModal}
          curr_todo={curr_todo}
          setCurr_todo={setCurr_todo}
        />
      )}
    </>
  );
}

const CTAIcon = ({ icon, text = 'tooltip' }) => (
  <div className="sidebar-icon group">
    {icon}
    <div className="sidebar-tooltip md:group-hover:scale-100">{text}</div>
  </div>
);

export default AddTask;
