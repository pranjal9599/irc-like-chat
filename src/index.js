import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import { 
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<Router>
		<div>
			<Route path='/' component={App} />			
		</div>
		</Router>
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
