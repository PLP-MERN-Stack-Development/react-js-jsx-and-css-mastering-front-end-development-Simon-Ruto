import { useState,useEffect } from 'react';
import { useTheme } from "./context/ThemeContext";
import './App.css';

// Import your components here
// import Button from './components/Button';
import Button from './components/Button';
// import Navbar from './components/Navbar';
import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
import Footer from './components/Footer';
// import TaskManager from './components/TaskManager';
import TaskManager from './components/TaskManager';


function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then((data) => {
      setApiData(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);



  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar component will go here */}
      {/* <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">PLP Task Manager</h1>
            <Button onClick={toggleTheme} variant="secondary">
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </Button>
        </div>
      </header> */}
      <Navbar />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            <div className="flex items-center gap-4 my-4">
              <Button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </Button>
              <span className="text-xl font-bold">{count}</span>
              <Button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </Button>
            </div>

            <div className="mt-4">
              <TaskManager/>
            </div>
          </div>
        </div>
        
        {/* API data display will go here */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>

          {loading && <p className="text-gray-500">Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}

          {!loading && !error && (
            <ul className="space-y-2">
              {apiData.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-300 dark:border-gray-700 pb-2"
                >
                  <span className="font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </main>

      {/* Footer component will go here */}
      {/* <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
          </p>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
}

export default App; 