import './App.css';

function App() {
  const name = 'Mateus de Sousa Schiavi'
  const newName = name.toUpperCase();

  function soma(a,b) {
    return a + b
  }
  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {newName}</p>
      <p>Soma: {soma(1,2)}</p>
    </div>
  );
}

export default App;
