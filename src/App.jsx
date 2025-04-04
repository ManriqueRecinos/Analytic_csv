import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [csvContent, setCsvContent] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      setCsvContent(text);
    };
    reader.readAsText(file);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '220px', padding: '2rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Bienvenido al sistema de carga CSV</h1>
                <p>Selecciona una opción en el menú para comenzar.</p>
                <input type="file" accept=".csv" onChange={handleFileUpload} />
                <pre style={{ marginTop: '1rem', padding: '1rem' }}>
                  {csvContent}
                </pre>
              </div>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
