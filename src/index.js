import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/main.css';

const root = document.getElementById('root');
const rooter = ReactDOM.createRoot(root);
rooter.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);