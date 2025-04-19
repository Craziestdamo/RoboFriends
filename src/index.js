import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; 
import App from './containers/App';
import CardList from './components/CardList';
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<App />
);

// registerServiceWorker();

