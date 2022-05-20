import { useContext, createContext, useReducer, useState } from 'react';

const stateContext = createContext({});
const usePomodoroContext = () => useContext(stateContext);

const initialState = {
  tasks: [],
  errorShow: false,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_TODO':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case 'EDIT_TODO':
      const selectedTask = state.tasks.map(task =>
        task.id === action.payload.id ? action.payload : task
      );

      return {
        ...state,
        tasks: selectedTask,
      };

    case 'ERROR_SHOW':
      return {
        ...state,
        errorShow: action.payload,
      };

    case 'DELETE_TODO':
      const updatedTasks = state.tasks.filter(
        task => task.id !== action.payload
      );
      console.log(updatedTasks, 'context');
      return {
        ...state,
        tasks: updatedTasks,
      };

    case 'TOGGLE_COMPLETE':
      const updatedCompletedTask = state.tasks.map(task => {
        console.log(task);
        return task.id === action.payload
          ? { ...task, completed: !task.completed }
          : { ...task };
      });
      console.log(updatedCompletedTask);
      return {
        ...state,
        tasks: updatedCompletedTask,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const contextValue = {
    state,
    dispatch,
  };

  return (
    <stateContext.Provider value={contextValue}>
      {children}
    </stateContext.Provider>
  );
};

export { StateProvider, usePomodoroContext };
