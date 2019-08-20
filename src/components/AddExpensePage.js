import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { addExpense } from '../actions/expenses';



const AddExpensePage = (props) => (
    <div>
        <h1>Adicionar Despesa</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/'); // redireciona para o painel de controle.

            }}
        
         />
    </div>
);


export default connect()(AddExpensePage);