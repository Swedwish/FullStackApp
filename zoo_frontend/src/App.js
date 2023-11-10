import './App.css';
import HomePage from './pages/Common/HomePage';
import AnimalAdditionPage from './pages/Animal/AnimalAdditionPage';
import DietAdditionPage from './pages/Diet/DietAdditionPage';
import CellAdditionPage from './pages/Cell/CellAdditionPage';
import FoodAdditionPage from './pages/Food/FoodAdditionPage';
import FoodRetailerAdditionPage from './pages/FoodRetailer/FoodRetailerAdditionPage';
import JobAdditionPage from './pages/Job/JobAdditionPage';
import WorkerAdditionPage from './pages/Worker/WorkerAdditionPage';
import RemovalPage from './pages/Common/RemovalPage'
import GetAllPage from './pages/Common/GetAllPage'
import GetDietPage from './pages/Diet/GetDietPage'

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoveAnimalPage from './pages/Animal/MoveAnimalPage';
import GetAnimalByNamePage from './pages/Animal/GetAnimalByNamePage';
import ChangeCellTemperaturePage from './pages/Cell/ChangeCellTemperaturePage';
import GetFoodByNamePage from './pages/Food/GetFoodByNamePage';
import GetFoodRetailerByIdPage from './pages/FoodRetailer/GetFoodRetailerByIdPage';
import ChangePricePage from './pages/FoodRetailer/ChangePricePage';
import GetJobByIdPage from './pages/Job/GetJobById';
import GetJobByAnimalOrWorkerIdPage from './pages/Job/GetJobByAnimalOrWorkerIdPage';
import GetWorkerByNamePage from './pages/Worker/GetWorkerByNamePage';
import GetWorkerByIdPage from './pages/Worker/GetWorkerByIdPage';
import ChangeSalaryPage from './pages/Worker/ChangeSalaryPage';
import PromotePage from './pages/Worker/PromotePage';
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
            <Route path='/promoteWorker' element={<PromotePage/>}/>
            <Route path='/changeWorkerSalary' element={<ChangeSalaryPage/>}/>
            <Route path='/getWorkersByName' element={<GetWorkerByNamePage/>}/>
            <Route path='/getWorkerById' element={<GetWorkerByIdPage/>}/>
          </Routes>
        </div>
      </LocalizationProvider>
    </Router>
  );
}

export default App;