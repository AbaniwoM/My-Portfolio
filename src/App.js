import BackgroundAnimation from './components/BackgrooundAnimation/BackgroundAnimation';
import "./App.css";
import Header from './components/Header/Header';
import About from './components/About/About';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="central">
        <div className="bg-animation">
          <BackgroundAnimation />
        </div>
        <div className="central-text">
          <h3>HELLO! I'M</h3>
          <h1>MICHAEL ABANIWO</h1>
          <p>Software Developer</p>
        </div>
      </div>
      <About />
    </div>
  );
}
 