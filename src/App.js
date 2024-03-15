import { Routes, Route } from 'react-router-dom';
import './App.css';
import Template1 from './templates/Template1';
import DashboardMap from "../src/components/DashboardMap";
import Components from './components/Components';
import Charts from './components/Charts';
import Buttons from './components/Buttons';
import Panels from './components/Panels';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Template1 />}>
          <Route path="/dashboard" element={<DashboardMap />} />
          <Route path="/components" element={<Components />}> {/* Changed the path to "/components" */}
            <Route path="/components/buttons" element={<Buttons />} /> {/* Nested route for Buttons */}
            <Route path="/components/panels" element={<Panels />} />
          </Route>
          <Route path="/charts" element={<Charts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
