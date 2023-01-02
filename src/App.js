import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';
import UseStateExample from './component/UseStateExample';

function App() {

  return (
    <div className="App">
      <Hello/>
      <Welcome/>
      <UseStateExample/>
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
