import { useParams } from 'react-router-dom';
import { usePomodoroContext } from '../context/state-context';

function TaskPage() {
  const { taskId } = useParams();
  const { state } = usePomodoroContext();

  function getTaskDetails(tasks, taskId) {
    return tasks.find(task => task.id === taskId);
  }
  const task = getTaskDetails(state.tasks, taskId);

  return (
    <div className="text-xl">
      Task id is : {taskId} {task.title} {task.description}
    </div>
  );
}

export default TaskPage;
