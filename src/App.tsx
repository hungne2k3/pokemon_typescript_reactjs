import React from 'react';
import './App.css';

type Study = {
  id: number;
  name: string;
}

type info = Study & {
  address?: string;
}

const people: info = {
  id: 1,
  name: 'John',
}

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
