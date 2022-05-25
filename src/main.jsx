import React from 'react';
import './sass/main.css';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rooter = ReactDOM.createRoot(root);
rooter.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);