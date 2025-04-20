// App.js
import React from 'react';
import InvestmentTimeline from './components/InvestmentTimeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ETF 포트폴리오 투자 전략</h1>
      </header>
      <main>
        <InvestmentTimeline />
      </main>
      <footer>
        <p>© 2025 투자 전략 플래너</p>
      </footer>
    </div>
  );
}

export default App;