import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
