import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';
import UseStateExample from './component/UseStateExample';
import PropsExample from './component/PropsExample';

function App() {

  return (
    <div className="App">
      <Hello/>
      <Welcome/>
      <UseStateExample/>
      <PropsExample age={20}/>
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
