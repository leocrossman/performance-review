import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { ThemeProvider } from './components/DarkTheme/ThemeContext';
import Background from './components/DarkTheme/Background';
import Toggle from './components/DarkTheme/ThemeToggle';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
          <Toggle />
        </div>

        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
