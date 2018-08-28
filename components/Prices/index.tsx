

export interface BPI {
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

export interface PricesProps {
  bpi: BPI,
}

export interface PricesState {
  currency: string;
  posCurrencies: string[];
}


class Prices extends React.Component<PricesProps, PricesState> {
  state: PricesState;
  props: PricesProps;
  constructor(props: PricesProps) {
    super(props);

    this.state = {
      currency: 'USD',
      posCurrencies: [ 'USD', 'EUR', 'GBP'],
    };
  }

  render() {
    const { currency, posCurrencies } = this.state;
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
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          {posCurrencies.map(c => (
            <option key={c} value={c} selected={c===currency}>{c}</option>
          ))}
        </select>
      </div>
    )
  }
}


export default Prices;