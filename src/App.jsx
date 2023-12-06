import "./assets/css/reset.css";
import Button from "./components/common/Button";
import GlobalStyle from "./components/common/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Button primary={"primary"}>있음</Button>
      <Button color={"blue"}>없음</Button>
    </div>
  );
}

export default App;
