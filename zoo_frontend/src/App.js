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
import GetAllPage from './pages/GetAllPage'
import GetDietPage from './pages/GetDietPage'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoveAnimalPage from './pages/MoveAnimalPage';
import GetAnimalByNamePage from './pages/GetAnimalByNamePage';
import ChangeCellTemperaturePage from './pages/ChangeCellTemperaturePage';
import GetFoodByNamePage from './pages/GetFoodByNamePage';
import GetFoodRetailerByIdPage from './pages/GetFoodRetailerByIdPage';
import ChangePricePage from './pages/ChangePricePage';
import GetJobByIdPage from './pages/GetJobById';
import GetJobByAnimalOrWorkerIdPage from './pages/GetJobByAnimalOrWorkerIdPage';

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
            <Route path="/getAll/:className" element={<GetAllPage/>} />
            <Route path="/move/animal" element={<MoveAnimalPage/>} />
            <Route path='/getAnimalByName' element={<GetAnimalByNamePage/>}/>
            <Route path='/changeTemperatureInCell' element={<ChangeCellTemperaturePage/>}/>
            <Route path='/getDiet' element={<GetDietPage/>}/>
            <Route path='/getFoodByName' element={<GetFoodByNamePage/>}/>
            <Route path='/getFoodRetailerById' element={<GetFoodRetailerByIdPage/>}/>
            <Route path='/changePrice' element={<ChangePricePage/>}/>
            <Route path='/getJobById' element={<GetJobByIdPage/>}/>
            <Route path='/getJobByAnimalOrWorkerId' element={<GetJobByAnimalOrWorkerIdPage/>}/>
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;