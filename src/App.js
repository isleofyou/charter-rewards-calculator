import './styles/App.scss';
import { RewardsCalculator } from './components';

function App() {
  return (
    <div className="App">
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <header className="App-header" role="banner">
        <h1 aria-label="Charter Wild Kingdom Pet Supplies - Zoo Animal Supply Store">
          Charter Wild Kingdom Pet Supplies
        </h1>
        <h2 aria-label="Customer Rewards Program Dashboard">
          Customer Rewards Program
        </h2>
      </header>
      <main role="main" id="main-content" aria-label="Rewards Calculator Application">
        <RewardsCalculator />
      </main>
    </div>
  );
}

export default App;