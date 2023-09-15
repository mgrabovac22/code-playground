import './App.css';
import Header1 from './header-components/header';
import Main from './main-components/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header1 /> 
      </header>
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
