import './App.css';
import RewardsCalculator from './components/RewardsCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🦁 Charter Wild Kingdom Pet Supplies 🐘</h1>
        <h2>Customer Rewards Program</h2>
      </header>
      <main>
        <RewardsCalculator />
      </main>
    </div>
  );
}

export default App;
