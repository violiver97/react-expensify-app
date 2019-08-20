import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/Routes';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectores/expenses';



const store = configureStore();

store.dispatch(addExpense({ description: 'Agua', amount: 2, createdAt: 20 }));
store.dispatch(addExpense({ description: 'Gas', amount: 50, createdAt: 25 }));
store.dispatch(addExpense({ description: 'Aluguel', amount: 1000, createdAt: 15 }));



const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))