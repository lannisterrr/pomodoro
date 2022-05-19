import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePomodoroContext } from '../context/state-context';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const children = ({ remainingTime }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};

function TaskPage() {
  const { taskId } = useParams();
  const { state } = usePomodoroContext();
  const [key, setKey] = useState(0);

  function getTaskDetails(tasks, taskId) {
    return tasks.find(task => task.id === taskId);
  }
  const task = getTaskDetails(state.tasks, taskId);
  const timerTime = Number(task.userTime);

  const [startTimer, setStartTimer] = useState(false);

  const handleStartTimer = () => {
    setStartTimer(true);
  };

  const handleReset = () => {
    setKey(prevKey => prevKey + 1);
    setStartTimer(false);
  };

  return (
    <div className="w-screen  min-h-screen bg-primary pt-8 ">
      <main className="mx-auto flex-1 bg-white max-w-[90%] md:max-w-[80%] min-h-[100vh] rounded-2xl grid grid-cols-2 ">
        <div className="p-4 flex flex-col justify-center items-center">
          <CountdownCircleTimer
            key={key}
            isPlaying={startTimer}
            duration={timerTime * 60}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[10, 6, 3, 0]}
          >
            {children}
          </CountdownCircleTimer>
          <div className="flex pt-20 gap-4">
            <button
              className="bg-primary text-white font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3 ease-linear transition-all duration-150"
              type="button"
              onClick={handleStartTimer}
            >
              Start Timer
            </button>
            <button
              className="bg-secondary text-white font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setStartTimer(false)}
            >
              Pause Timer
            </button>
            <button
              className="bg-emerald-500 text-white font-bold uppercase text-sm px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-3 ease-linear transition-all duration-150"
              type="button"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="p-2 flex flex-col">
          <h1 class="text-2xl md:text-5xl p-4 font-normal leading-normal mt-0 mb-2 text-secondary text-center mt-10">
            {task.title}
          </h1>
          <h4 class="font-medium leading-tight text-xl mt-0 mb-2 text-gray-700 text-center">
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
