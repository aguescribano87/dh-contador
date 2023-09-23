import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DisplayProvider } from './context/displayContext';
import theme from '@oneloop/theme';
import { ThemeProvider } from 'styled-components';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <DisplayProvider>
                <ThemeProvider theme={theme}>
                        <App />
                </ThemeProvider>
        </DisplayProvider>
)
