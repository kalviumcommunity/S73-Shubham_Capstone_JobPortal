import './App.css';
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './Components/Jobs/Job';
import Companies from './Components/Companies/Companies';
import Resources from './Components/Resources/Resources';

function App() {
  return (

      <Router>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App; 