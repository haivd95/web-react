import logo from './logo.svg';
import './App.css';
import Book from './component/book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Book name="Component 1"/>
        <Book name="Component 2"/>
        <Book name="Component 3"/>
      </header>
    </div>
  );
}

export default App;
