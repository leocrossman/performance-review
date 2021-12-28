import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import './styles.css';
import App from './App';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name='Jane' />, mountNode);
