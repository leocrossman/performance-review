import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App.js';
import { ThemeProvider } from './components/DarkTheme/ThemeContext';
import Background from './components/DarkTheme/Background';
import Toggle from './components/DarkTheme/ThemeToggle';
import Footer from './components/Footer/Footer';
import CreateOrganizationForm from './components/Guest/Buttons/NewOrganization/CreateOrganizationForm/CreateOrganizationForm';
import CreateAccountForm from './components/Guest/Buttons/CreateAccount/CreateAccountForm/CreateAccountForm';
import Dashboard from './components/Dashboard/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Background>
          <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
            <Toggle />
          </div>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='new+member' element={<CreateAccountForm />} />
            <Route path='new+organization' element={<CreateOrganizationForm />} />
          </Routes>
          <div className='flex items-center justify-center absolute bottom-0 min-w-full'>
            <Footer />
          </div>
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
