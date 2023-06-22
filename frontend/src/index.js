

import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css'//!default styles if custom not used
// import './assets/styles/bootstrap.custom.css';//!custom artifacts
// import './assets/styles/index.css';//!custom artifacts
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/scss/custom.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import 'bootstrap/dist/css/bootstrap.min.css'//!default styles if custom not used
// import './assets/styles/bootstrap.custom.css';
// import './assets/styles/index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
