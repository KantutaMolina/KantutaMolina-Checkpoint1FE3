import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Project from'./components/Project';
import Social from'./components/Social';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Social />
    </div>
  );
}

export default App;
