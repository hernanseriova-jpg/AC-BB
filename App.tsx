
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SquadDetail from './pages/SquadDetail';
import AddPlayer from './pages/AddPlayer';
import Tournaments from './pages/Tournaments';
import AddMatch from './pages/AddMatch';
import PlayerProfile from './pages/PlayerProfile';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/squad" element={<SquadDetail />} />
        <Route path="/add-player" element={<AddPlayer />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/add-match" element={<AddMatch />} />
        <Route path="/player/:id" element={<PlayerProfile />} />
        <Route path="/profile" element={<Settings />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
