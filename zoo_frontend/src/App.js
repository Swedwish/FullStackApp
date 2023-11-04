import './App.css';
import Appbar from './components/Appbar';
import Animal from './components/Animal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Appbar />
        <Animal />
      </div>
    </LocalizationProvider>
  );
}

export default App;
