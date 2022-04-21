import React from 'react';
import './sass/main.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rooter = ReactDOM.createRoot(root);
rooter.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);