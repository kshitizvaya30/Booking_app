import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';
import TicketBooking from './components/ticketBook/ticketBooking/TicketBooking';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/ticket-booking" element={<TicketBooking />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
