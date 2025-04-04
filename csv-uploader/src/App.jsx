import { useState } from 'react'

function App() {
  const [csvContent, setCsvContent] = useState('')

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target.result
      setCsvContent(text)
    }
    reader.readAsText(file)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Subir archivo CSV</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <pre style={{ marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
        {csvContent}
      </pre>
    </div>
  )
}

export default App
