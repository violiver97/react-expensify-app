import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Painel de Controle</NavLink>
        <NavLink to="/create" activeClassName="is-active">Adicionar Despesa</NavLink>
        <NavLink to="/help" activeClassName="is-active">Ajuda</NavLink>
    </header>
)
export default Header;