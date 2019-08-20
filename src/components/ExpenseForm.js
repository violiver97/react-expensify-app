import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
moment.locale('pt-br')

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorDescription: '',
            errorAmount: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }

    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ errorDescription: 'Por favor insira o nome da despesa' }))
            this.setState(() => ({ errorAmount: 'Insira o valor da despesa' }))

        } else if (this.state.description || this.state.amount) {
            this.setState(() => ({ errorDescription: '' }))
            this.setState(() => ({ errorAmount: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.errorDescription && <p>{this.state.errorDescription}</p>}
                {this.state.errorAmount && <p>{this.state.errorAmount}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        onBlur={() => {
                            if (!this.state.description) {
                                this.setState(() => ({ errorDescription: 'Por favor insira o nome da despesa' }))

                            } else if (this.state.description) {
                                this.setState(() => ({ errorDescription: '' }))
                            }

                        }}
                    />
                    
                    <input
                        type="text"
                        placeholder="Valor"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        onBlur={() => {
                            if (!this.state.amount) {
                                this.setState(() => ({ errorAmount: 'Insira o valor da despesa' }))

                            } else if (this.state.amount) {
                                this.setState(() => ({ errorAmount: '' }))
                            }
                        }}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}

                    />
                    <textarea
                        placeholder="Descrição (opcional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}