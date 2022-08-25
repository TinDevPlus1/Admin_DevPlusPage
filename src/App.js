import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Banner from './Page/Banner';
import AboutDev from './Page/AboutDev';
import SkillBox from './Page/SkillBox';
import Campus from './Page/Campus';
import Admission from './Page/Admission';
import Concerns from './Page/Concerns';
import Carousel from './Page/Carousel';
import RoadToBe from './Page/RoadToBe';
import RightMenu from './Page/RightMenu';

import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/AboutDev" element={<AboutDev />} />
          <Route path="/SkillBox" element={<SkillBox />} />
          <Route path="/Campus" element={<Campus />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Concerns" element={<Concerns />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/RoadToBe" element={<RoadToBe />} />
          <Route path="/RightMenu" element={<RightMenu />} />
        </Routes>
      </BrowserRouter>
      <SideNav></SideNav>
      <Footer></Footer>
    </div>
  );
}

export default App;
