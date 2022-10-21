import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import IdnApi from './pages/indonesiaAPI';
import SearchApi from './pages/searchAPI';
import CovidApi from './pages/covidAPI';
import ProgrammingApi from './pages/programmingAPI';
import SaveAPI from './pages/Save';


function App() {
  return (
    <div className="App">
      {/* <SearchApi /> */}
      <Header />
      <Routes>
        <Route path="/" element={<SearchApi  />} />
        <Route path="/indonesia" element={<IdnApi kategori="indonesia" />} />
        <Route path="/programming" element={<ProgrammingApi kategori="programming" />} />
        <Route path="/covid" element={<CovidApi kategori="covid" />} />
        <Route path="/save" element={<SaveAPI />} />
      </Routes>
      
    </div>
  );
}

export default App;
