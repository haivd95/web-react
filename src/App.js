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
        <Book name="haivd"/>
        <Book name="haivd2"/>
        <Book name="haivd3"/>
      </header>
    </div>
  );
}

export default App;
