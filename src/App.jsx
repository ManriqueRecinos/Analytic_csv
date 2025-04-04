import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import About from '../components/About'; // Importar About
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
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <main style={{ marginLeft: '220px', padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <Routes>
            <Route path="/" element={<h1>Bienvenido al sistema de carga CSV</h1>} />
            <Route path="/acerca-de" element={<About />} />
          </Routes>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
          <pre style={{ marginTop: '1rem', padding: '1rem' }}>
            {csvContent}
          </pre>
        </main>
      </div>
    </Router>
  );
}

export default App;
