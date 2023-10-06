import { Provider } from "react-redux";
import Card from "./containers/Card";
import Header from "./containers/Header";
import EstiloGlobal, { Container } from "./styles";
import store from "./store/configStore";


function App() {
  return (
      <Provider store={store}>
        <EstiloGlobal />
        <Header />  
        <Container>
          <Card />
        </Container>
      </Provider>
  )
}

export default App;
