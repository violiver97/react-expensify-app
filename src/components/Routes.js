import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpExpensePage from "./HelpExpensePage";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />

        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;