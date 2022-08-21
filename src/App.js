import './App.css';
import "./styles.css";
import JokeDashbaord from './components/JokeDashboard';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <em><h1>Sats-4-Laughs</h1></em>
      <h2>
        <Typewriter
            options={{
              strings: ['Click on a joke to pay for the punchline'],
              autoStart: true,
              loop: false,
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
