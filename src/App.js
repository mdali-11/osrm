// import logo from './logo.svg';
import './App.css';
import { About } from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
