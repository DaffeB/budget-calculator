import React from 'react';
import './App.css';
import Alert from './Components/Alert';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseItem from './Components/ExpenseItem';
import ExpenseList from './Components/ExpenseList';

function App() {
  return (
    <div className="App">
      <h1>hello from app</h1>
      <ExpenseForm></ExpenseForm>
      <ExpenseItem></ExpenseItem>
      <ExpenseList></ExpenseList>
      <Alert></Alert>

    </div>
  );
}

export default App;
