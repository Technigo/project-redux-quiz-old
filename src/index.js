import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styling/index.css';
import './styling/header.css'
import './styling/currentquestionfff.css'
import './styling/progressbarfff.css';
import './styling/summary.css'
import './styling/restartbuttonfff.css'
import './styling/footer.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
