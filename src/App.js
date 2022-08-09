import logo from './logo.svg';
import './App.css';
import getTicketList from './store/api/getTicketList';
function App() {
  const filter = {"filter":{"queueNames":"Help Desk","excludeCompleted":1,"account":"","contactName":"","issueTypeNames":""}}
  console.log(getTicketList(filter))
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
