import '../css/styles.css';
import Option from './Option.js'

function App() {
  return (
    <div className="App">
      <header className="text-5xl">
        Macromancer
      </header>
      <input
            id="mainSpell"
            className="form-control"
            key="parentAbility"
            type="text"
            value="test"
      ></input>
      <Option />
    </div>
  );
}

export default App;
