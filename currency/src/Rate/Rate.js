import React from 'react';
import './Rate.css';
import Calc from './Calc/Calc';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date':'',
            'rateDate':'',
            'currencyRate':{},
        }
          this.currency = ['USD','EUR','RUB','CAD','CHF','CZK','GBP','PHP']
        }
        componentDidMount() {
            this.getRate(); // Вызов метода getRate в componentDidMount
        }
    getRate = () => {
        fetch('https://open.er-api.com/v6/latest')
        .then(response => {
           return response.json()
        })
        .then(data => {
          this.setState({rateDate:data.time_last_update_utc})
          let result = {}
          this.currency.forEach(el => {
            result[el] = data.rates[el]
          })
          this.setState({currencyRate:result})
        }) 
    }
    render() {
        return (
            <div className='rate'>
                <h3>Курс валют по состоянию на {this.state.rateDate}</h3>
                <div className="flex-container">
                {Object.keys(this.state.currencyRate).map( (keyName,i) =>
                    (
                    <div className="block flex-item" key={keyName}>
                        <div className="currency-name">{keyName}</div>
                        <div className="currency-in">{this.state.currencyRate[keyName]
                            .toFixed(3)}</div>
                        <p>можно купить за 1 USD *</p>
                    </div> 
                    )
                )}
                </div>
                <Calc rate={this.state.currencyRate}/>
            </div>
        )
    }
}

export default Rate