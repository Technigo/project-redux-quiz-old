import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styling/index.css';
import './styling/header.css'
import './styling/currentQuestion.css'
import './styling/progressBar.css';
import './styling/summary.css'
import './styling/restartButton.css'
import './styling/footer.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
