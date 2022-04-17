
import './App.css';
import {Routes, Route} from "react-router-dom";
import Acceuil from './Components/Acceuil/Acceuil'
import Reservation from './Components/Reservation/Reservation'
import Nouscontacter from './Components/Nouscontacter/Nouscontacter'
import Sinscrire from './Components/Sinscrire/Sinscrire'
import Seconnecter from './Components/Seconnecter/Seconnecter'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Acceuil />} />
       <Route path="/Reservation" element={<Reservation />} />
       <Route path="/Nouscontacter" element={<Nouscontacter />} />
       <Route path="/Sinscrire" element={<Sinscrire />} />
       <Route path="/Seconnecter" element={<Seconnecter />} />

     </Routes>
    </div>
  );
}

export default App;
