import React from 'react';
import Fetch from 'isomorphic-unfetch';

import Chart from '../Chart';


interface BPI {
  USD: {
    code: string;
    description: string;
    symbol: string;
    rate: string;
    rate_float: string;
  };
  EUR: {
    code: string;
    description: string;
    symbol: string;
    rate: string;
    rate_float: string;
  };
  GBP: {
    code: string;
    description: string;
    symbol: string;
    rate: string;
    rate_float: string;
  }
}

interface PricesProps {
  bpi: BPI,
}

interface HistoryObject {
  [key: string]: number;
}

interface PricesState {
  currency: string;
  posCurrencies: string[];
  historyData: HistoryObject;
}



class Prices extends React.Component<PricesProps, PricesState> {
  state: PricesState;
  props: PricesProps;
  constructor(props: PricesProps) {
    super(props);

    this.state = {
      currency: 'USD',
      posCurrencies: [ 'USD', 'EUR', 'GBP'],
      historyData: {},
    };
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
  }

  async componentDidMount() {
    const res = await Fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`);
    const data = await res.json();
    this.setState({ historyData: data.bpi });
  }

  handleCurrencyChange(e) {
    const { value } = e.target;
    this.setState({ currency: value }, async () => {
      const res = await Fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${this.state.currency}`);
      const data = await res.json();
      this.setState({ historyData: data.bpi });
    })
  }

  render() {
    const { currency, posCurrencies, historyData } = this.state;
    const { bpi } = this.props;
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpi[currency].description}:
            <span className="badge badge-primary">{bpi[currency].code}</span>
            <strong>{bpi[currency].rate}</strong>
          </li>
        </ul>
        <br />
        <select
          onChange={this.handleCurrencyChange}
          className="form-control"
        >
          {posCurrencies.map(c => <option key={c} value={c} selected={c===currency}>{c}</option> )}
        </select>

        <div id="chartContainer" >
          <Chart
            rawData={historyData}
            height={300}
            width={800}
          />
        </div>

        <style jsx>{`
          #chartContainer {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
}


export default Prices;