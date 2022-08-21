import './App.css';
import "./styles.css";
import JokeDashbaord from './components/JokeDashboard';
import Typewriter from 'typewriter-effect';

function App() {
  const typeWriter = new Typewriter('#typewriter', {
    strings: ['Click on a joke to pay for the punchline'],
    autoStart: true,
    loop: false,
  });
  return (
    <div className="App">
      <h1>Sats-4-Laughs</h1>
      <h2>
        <Typewriter
            options={{
              strings: ['Click on a joke to pay for the punchline'],
              autoStart: true,
              loop: false,
              deleteAll: 1,
              cursor: '',
              deleteSpeed: 33,
              delay: 33,
              deleteChars: 5,
            }}
        />
      </h2>
      <JokeDashbaord />
    </div>
  );
}

export default App;
