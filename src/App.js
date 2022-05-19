import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:taskId" element={<TaskPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p className="heading-1">There's nothing here!</p>
              <Link to="/" className="heading-2">
                GO to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
