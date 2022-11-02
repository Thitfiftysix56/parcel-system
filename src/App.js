import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLogin from './pages/PageLogin'
import PageSignUp from './pages/PageSignUp'
import Sidebar from './components/Sidebar'



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<PageLogin/>} />
      <Route path='/PageHome' element={<Sidebar/>} />
      <Route path='/PageParcelList' element={<Sidebar/>} />
      <Route path='/PageSignUp' element={<PageSignUp/>} />
      <Route path='/PageViewItem' element={<Sidebar/>} />
      <Route path='/PageApproveItem' element={<Sidebar/>} />
      <Route path='/PageReport' element={<Sidebar/>} />
      <Route path='/PageManage' element={<Sidebar/>} />
      </Routes>
    </Router>
  );
}

export default App;
