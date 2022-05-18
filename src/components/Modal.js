import { v4 as uuid } from 'uuid';
import reactDom from 'react-dom';
import { usePomodoroContext } from '../context/state-context';

function Modal({ toggleModal, curr_todo, setCurr_todo }) {
  const { state, dispatch } = usePomodoroContext();

  const handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setCurr_todo(prevTodo => ({ ...prevTodo, [name]: value }));
  };

  const handleTodoSave = () => {
    console.log(curr_todo.id);
    if (curr_todo.id) {
      dispatch({ type: 'EDIT_TODO', payload: curr_todo });
    } else {
      dispatch({ type: 'SAVE_TODO', payload: { id: uuid(), ...curr_todo } });
    }
    setCurr_todo({});
    toggleModal(false);
  };

  return reactDom.createPortal(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">What's on your mind?</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span
                  onClick={() => toggleModal(false)}
                  className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none"
                >
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="flex flex-col col-span-4 gap-2">
                <label htmlFor="title"> Title : </label>
                <input
                  id="title"
                  type="text"
                  value={curr_todo.title ?? ''}
                  className="p-2  border-[1px] border-gray-400  outline-gray-400"
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Add title...."
                />
                <label htmlFor="description">Description :</label>
                <textarea
                  className="resize-none border-[1px]   border-gray-400 outline-gray-400"
                  id="description"
                  placeholder="Add description..."
                  rows="5"
                  value={curr_todo.description ?? ''}
                  onChange={handleInputChange}
                  name="description"
                ></textarea>
                <label htmlFor="time"> Time : </label>
                <input
                  id="time"
                  type="text"
                  className="p-2  border-[1px] border-gray-400 outline-gray-400"
                  value={curr_todo.userTime ?? ''}
                  onChange={handleInputChange}
                  name="userTime"
                  placeholder="Add time...."
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => toggleModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleTodoSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-overlay"></div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
