import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HelloWrap from './01_Hello/HelloWrap';
import MyClockWrap from './02_Clock/MyClockWrap';
import LottoWrap from './05_Lotto/LottoWrap';
import TrafficWrap from './06_Traffic/TrafficWrap';
import MyRefAddWrap from './07_MyRef/MyRefAddWrap';
import GalleryWrap from './08_Gallery/GalleryWrap';
import PracticeWrap from './00_Navigate/PracticeWrap';
import RestWrap from './11_Rest/RestWrap';
import AxiosWrap from './12_Axios/RestWrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HelloWrap />} />
        <Route path='/practice/*' element={<PracticeWrap />} />
        <Route path="/clock" element={<MyClockWrap />} />
        <Route path="/lotto" element={<LottoWrap />} />
        <Route path="/traffic" element={<TrafficWrap />} />
        <Route path="/myrefadd" element={<MyRefAddWrap />} />
        <Route path="/gallery" element={<GalleryWrap />} />
        <Route path="/rest" element={<RestWrap />} />
        <Route path="/axios" element={<AxiosWrap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;