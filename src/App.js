import TicketsManager from './elements/TicketsManager';
import './styles/pages/index.css';

const SearchIdUrl='https://front-test.beta.aviasales.ru/search';
const SearchTicketsUrl='https://front-test.beta.aviasales.ru/tickets?searchId='

function App() {
  return (
    <div className="app">
      <TicketsManager url={[SearchIdUrl, SearchTicketsUrl]}/>
    </div>
  );
}

export default App;
