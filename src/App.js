import { Routes, Route } from 'react-router-dom';
import './App.css';
import Template1 from './templates/Template1';
import DashboardMap from "../src/components/DashboardMap";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Template1 />}>
          <Route path="/dashboard" element={<DashboardMap />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
