import './App.css';
import Login from './pages/login';
import MyProfile from './pages/myProfile';
import CodingProfiles from './pages/codingProfiles';
import LeaderBoard from './pages/leaderboard';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Register from './pages/register';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/my-profile' element={<MyProfile />}/>
            <Route path='/coding-profiles' element={<CodingProfiles/>}/>
            <Route path='/leaderboard' element={<LeaderBoard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
