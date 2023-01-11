import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SeatState from './components/ticketBook/contex/SeatState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
    <SeatState>
      <App />
    </SeatState>
  </React.StrictMode>
);

