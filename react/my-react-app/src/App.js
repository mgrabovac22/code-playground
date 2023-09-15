import './App.css';
import Header1 from './header-components/header';
import Main from './main-components/main';
import Footer from './footer-components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header1 /> 
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
