import React , { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';



const initialExpenses = [
  {id: uuidv4(), charge:"rent", amount: 1600},
  {id: uuidv4(), charge:"car payment", amount: 400},
  {id: uuidv4(), charge:"credit card bill", amount: 1200}
]


function App() {
  // STATE CVALUES
  //ALL EXPENSES, ADDING EXPENSE

const [expenses, setExpenses] = useState(initialExpenses)


// FUNCTIONALITY

  return (
    <>
      
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className='App'>
      <ExpenseForm/>
      <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        Total Spending : {" "}
        <span className='total'>
        {" "}€
          {expenses.reduce((accumulator, current) => {
            return accumulator += current.amount
          }, 0)}
        </span>
      </h1>


    </>
  );
}

export default App;
