import './App.css';
import Login from './pages/login';
import MyProfile from './pages/myProfile/myProfile';
import CodingProfiles from './pages/codingProfiles';
import LeaderBoard from './pages/leaderboard/leaderboard';
import MyAccount from './pages/myAccount';

//import Footer from './layouts/footer';
import Register from './pages/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Switch } from 'react-router';

function App() {

  return (
    <div >
      
      <Router>
        {/* <Navbar /> */}
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/my-profile' element={<MyProfile />}/>
            <Route path='/coding-profiles' element={<CodingProfiles/>}/>
            <Route path='/leaderboard' element={<LeaderBoard />}/>
            <Route path='/my-account' element={<MyAccount />}/>
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
