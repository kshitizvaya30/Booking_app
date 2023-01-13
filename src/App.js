import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import History from './components/History/History';
import SignUp from './components/Pages/SignUp';
import TicketBooking from './components/ticketBook/ticketBooking/TicketBooking';
import DownloadTicket from './components/downloadTicket/DownloadTicket';
import Checkout from './components/Checkout/Checkout';
import CartSection from './components/Cart/CartSection/CartSection';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/ticket-booking" element={<TicketBooking />}/>
        <Route path="/cart" element={<CartSection />} />
        <Route path="/downloadTicket" element={<DownloadTicket />} />
        <Route path="/checkout-page" element={<Checkout />}  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
