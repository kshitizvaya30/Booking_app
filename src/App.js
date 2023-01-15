import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Shows from './components/Pages/Shows';
import History from './components/History/History';
import DownloadTicket from './components/downloadTicket/DownloadTicket';
import Checkout from './components/Checkout/Checkout';
import CartSection from './components/Cart/CartSection';
import TicketBookingPage from './components/Pages/TicketBookingPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/ticket-booking" element={<TicketBookingPage />}/>
        <Route path="/cart" element={<CartSection />} />
        <Route path="/downloadTicket" element={<DownloadTicket />} />
        <Route path="/checkout-page" element={<Checkout />}  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
