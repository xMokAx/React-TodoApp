import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/reset.min.css'
import './css/style.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
