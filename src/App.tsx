import { GlobalStyle } from './styles/global';
import { Card } from './components/Card';
import { NewAdviceButton } from './components/Button';
import { AdviceProvider} from './hooks/useAdvice';

function App() {
  return (
    <AdviceProvider>
    <div className="App">
        <div className="cardWrapper">
          <Card />
          <NewAdviceButton />
        </div>
        <GlobalStyle />
    </div>
    </AdviceProvider>
  );
}

export default App;
