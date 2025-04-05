import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import CSVUpload from './components/CSVUpload';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '220px', padding: '2rem', flex: 1 }}>
          <Routes>
            <Route path="/welcome" element={<Bienvenida />} />
            <Route path="/about" element={<About />} />
            <Route path="/upload" element={<CSVUpload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
