import { BsPlus, BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
function AddTask() {
  return (
    <>
      <div className="w-screen flex-col justify-center items-center min-h-screen bg-primary">
        <h1 class="text-3xl md:text-5xl p-4 font-normal leading-normal mt-0 mb-2 text-secondary text-center">
          Tailwind Starter Kit
        </h1>
        <main className="mx-auto flex-1 bg-white max-w-[90%] md:max-w-[80%] min-h-[70vh] rounded-lg">
          <div className="flex justify-between">
            <p className="font-mono p-2 text-xl font-bold"> To-Do List</p>
            <CTAIcon icon={<BsPlus size="32" />} text="Add task" />
          </div>
          <TODO />
          <TODO />
          <TODO />
          <TODO />
          <TODO />
        </main>
      </div>
    </>
  );
}

const CTAIcon = ({ icon, text = 'tooltip' }) => (
  <div className="sidebar-icon group">
    {icon}
    <div className="sidebar-tooltip md:group-hover:scale-100">{text}</div>
  </div>
);

const TODO = () => (
  <div className="mx-auto flex justify-around mb-3">
    <h4 class="font-medium leading-tight text-2xl mt-0 mb-2 text-gray-700">
      Tailwind Elements
    </h4>
    <div className="flex gap-6">
      <FiEdit size="24" />
      <BsFillTrashFill size="24" />
    </div>
  </div>
);

export default AddTask;
