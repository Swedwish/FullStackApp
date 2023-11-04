import './App.css';
import HomePage from './pages/HomePage';
import AnimalAdditionPage from './pages/AnimalAdditionPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addAnimal" element={<AnimalAdditionPage />} />
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;