import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Hotelinfo from './pages/HotelInfoPage/Hotelinfo';
import RoomsPage from './pages/RoomsPage/RoomsPage';
import InfoUtilsPage from './pages/InfoUtilsPage/InfoUtilPage';
import NearPlacesPage from './pages/AroundPage/AroundPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollaTop from './components/ScrollaTop/ScrollaTop';

const App = () => {

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <ScrollaTop />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Hotelinfo' element={<Hotelinfo />} />
          <Route path='/Rooms' element={<RoomsPage />} />
          <Route path='/Info-utils' element={<InfoUtilsPage />} />
          <Route path='/Near-places' element={<NearPlacesPage />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  )
}

export default App;
