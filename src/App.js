import logo from './logo.svg';
import './App.css';
import { Footer } from './learning/Footer';
import Heading from './learning/Heading';
import StatefulApp from './learning/statemngt/StatefulApp';
import TextInput from './learning/statemngt/TextInput';
import DataFlow from './learning/statemngt/DataFlow';
import CompLifeCycle from './learning/lifecycle/CompLifeCycle';
import Button from './learning/hooks/Button';
import DataLoader from './learning/hooks/DataLoader';

function App() {
  let company = "Bank of america"
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Heading companyProps={company}/>
      <Heading/>
      <h3>Business Component</h3> */}
      {/* <DataFlow/> */}
      {/* <CompLifeCycle/> */}

      {/* <Button/> */}

      <DataLoader/>

      {/* <StatefulApp/>
      <TextInput/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;


