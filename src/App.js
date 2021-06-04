import logo from "./logo.svg";
import "./App.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../images/ironhack-logo.svg" />
        <div className="content-container">
          <h1>Say Hello to React JS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super ninja deloper.
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="WhiteApp">
            <p>Awesome!</p>
          </div>
        </div>
      </header>
      <div className="Card-container">
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Card4></Card4>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
