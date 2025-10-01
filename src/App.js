import { useState, useEffect } from 'react';
import{ Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Fitness from './pages/Fitness';
import Mypage from './pages/Mypage';
import Game from './pages/Game';
import SideMenu from './pages/SideMenu';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash && <Splash onDone={() => setShowSplash(false)} />}
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sideMenu" element={<SideMenu />}></Route>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()} SmashMatch</small>
      </footer>
    </div>
  );
}

export default App;
