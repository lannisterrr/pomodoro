import './App.css';
import Home from './pages/Home';
import { Routes, Route, Link } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pomodoro</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Pomodoro application" />
      </Helmet>
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
