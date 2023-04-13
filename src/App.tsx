import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Hotelinfo from './pages/HotelInfoPage/Hotelinfo';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import InfoUtilsPage from './pages/InfoUtilsPage/InfoUtilPage';
import NearPlacesPage from './pages/AroundPage/AroundPage';
import BookNowPage from './pages/BookingPage/Bookingpage';
import HotelNav from './components/Navbar/HotelNav';

const App = () => {
  return (
    <BrowserRouter>
      <HotelNav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Hotelinfo' element={<Hotelinfo />} />
        <Route path='/Rooms' element={<RoomsPage />} />
        <Route path='/Info-utils' element={<InfoUtilsPage />} />
        <Route path='/Near-places' element={<NearPlacesPage />} />
        <Route path='#' element={<BookNowPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
