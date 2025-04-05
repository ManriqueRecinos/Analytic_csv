import { useState } from 'react';
import '../styles/DataTable.css';

const CSVUpload = () => {
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

  const data = [
    {
      impresora: 'HP LaserJet P1102',
      usuario: 'Juan Pérez',
      codigo: 'U001',
      negro: 120,
      color: 0,
      centro: 'Contabilidad'
    },
    {
      impresora: 'Epson L3150',
      usuario: 'Ana López',
      codigo: 'U002',
      negro: 30,
      color: 45,
      centro: 'Recursos Humanos'
    }
  ];

  return (
    <div>
      <h1>Subir archivo CSV</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <pre style={{ marginTop: '1rem', padding: '1rem' }}>{csvContent}</pre>

      <div className="table-container">
        <h2>Tabla de impresiones</h2>
        <table>
          <thead>
            <tr>
              <th>Impresora</th>
              <th>Nombre de usuario</th>
              <th>Código de usuario</th>
              <th>Impresión negro</th>
              <th>Impresión color</th>
              <th>Centro de Costo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((fila, index) => (
              <tr key={index}>
                <td>{fila.impresora}</td>
                <td>{fila.usuario}</td>
                <td>{fila.codigo}</td>
                <td>{fila.negro}</td>
                <td>{fila.color}</td>
                <td>{fila.centro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CSVUpload;
