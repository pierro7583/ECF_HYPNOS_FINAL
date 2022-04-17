
import './App.css';
import {Routes, Route} from "react-router-dom";
import Acceuil from './Components/Acceuil/Acceuil'
import Reservation from './Components/Reservation/Reservation'

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Acceuil />} />
       <Route path="/Reservation" element={<Reservation />} />
     </Routes>
    </div>
  );
}

export default App;
