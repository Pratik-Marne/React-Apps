import React, { useState } from 'react';

function HistoryCounter() {
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);

  const count = history[index];

  const updateHistory = (newCount) => {
    const newHistory = [...history.slice(0, index + 1), newCount];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => updateHistory(count + 1)}>+</button>
      <button onClick={() => updateHistory(count - 1)}>-</button>
      <button onClick={() => setIndex((i) => Math.max(i - 1, 0))} disabled={index === 0}>Undo</button>
      <button onClick={() => setIndex((i) => Math.min(i + 1, history.length - 1))} disabled={index === history.length - 1}>Redo</button>
    </div>
  );
}

export default HistoryCounter;
