import './App.css';
import HomePage from './pages/HomePage';
import AnimalAdditionPage from './pages/AnimalAdditionPage';
import DietAdditionPage from './pages/DietAdditionPage';
import CellAdditionPage from './pages/CellAdditionPage';
import FoodAdditionPage from './pages/FoodAdditionPage';
import FoodRetailerAdditionPage from './pages/FoodRetailerAdditionPage';
import JobAdditionPage from './pages/JobAdditionPage';
import WorkerAdditionPage from './pages/WorkerAdditionPage';
import RemovalPage from './pages/RemovalPage'

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
            <Route path='/addCell' element={<CellAdditionPage/>}/>
            <Route path='/addDiet' element={<DietAdditionPage/>}/>
            <Route path='/addFood' element={<FoodAdditionPage/>}/>
            <Route path='/addFoodRetailer' element={<FoodRetailerAdditionPage/>}/>
            <Route path='/addJob' element={<JobAdditionPage/>}/>
            <Route path='/addWorker' element={<WorkerAdditionPage/>}/>
            <Route path="/delete/:className" element={<RemovalPage/>} />
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;