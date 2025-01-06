import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import CalendarPage from './pages/CalendarPage';
    import TasksPage from './pages/TasksPage';
    import ProfilePage from './pages/ProfilePage';
    import Navigation from './components/Navigation';

    function App() {
      return (
        <Router>
          <div className="max-w-md mx-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Navigation />
          </div>
        </Router>
      );
    }

    export default App;
