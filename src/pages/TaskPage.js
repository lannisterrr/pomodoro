import { useParams } from 'react-router-dom';
import { usePomodoroContext } from '../context/state-context';

function TaskPage() {
  const { taskId } = useParams();
  const { state } = usePomodoroContext();

  function getTaskDetails(tasks, taskId) {
    return tasks.find(task => task.id === taskId);
  }
  const task = getTaskDetails(state.tasks, taskId);

  console.log(task);

  return (
    <div className="w-screen  min-h-screen bg-primary pt-8 ">
      <main className="mx-auto flex-1 bg-white max-w-[90%] md:max-w-[80%] min-h-[100vh] rounded-2xl grid grid-cols-2 ">
        <div className="p-4">
          <h3>Timer</h3>
        </div>
        <div className="p-2 flex flex-col">
          <h1 class="text-2xl md:text-5xl p-4 font-normal leading-normal mt-0 mb-2 text-secondary text-center mt-10">
            {task.title}
          </h1>
          <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700 text-center">
            {task.description}
          </h4>
          <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-400 text-center">
            Created at : {task.createdAt}
          </h4>
        </div>
      </main>
    </div>
  );
}

export default TaskPage;
