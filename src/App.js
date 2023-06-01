import { useState } from 'react';
import './App.css';
import { DarkModeContext } from './context/darkMode';
import Main from './layouts/Main';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      <div className="App">
        <Main/>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
