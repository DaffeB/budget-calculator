import React from 'react'
import ExpenseItem from './ExpenseItem';
import Item from './ExpenseItem';
import { MdDelete } from 'react-icons/md'






const ExpenseList = ({ expenses }) => {
    return (
        <div>

            <ul className='list'>
                {expenses.map(expense => {
                    return <Item key={expense.id} expense={expense} />
                })}
            </ul>
            {expenses.length > 0 && (
                <button className='btn'>Clear Expenses
                    <MdDelete className='btn-icon'></MdDelete>

                </button>
            )}
        </div>
    )
}

export default ExpenseList

