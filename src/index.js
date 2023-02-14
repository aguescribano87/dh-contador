import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DisplayProvider } from './context/displayContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <DisplayProvider>
                <App />
        </DisplayProvider>
)
