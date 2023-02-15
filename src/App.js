import Rotas from "./routes/routes";
import { CountProvider } from "./context/countContext";
import { AdressProvider } from "./context/adressContext";

function App() {
  return (
    <CountProvider>
      <AdressProvider>
        <Rotas />
      </AdressProvider>
    </CountProvider>
  );
}

export default App;
