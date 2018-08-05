
class Prices extends React.Component {
  state = {
    currency: 'USD',
    posCurrencies: [ 'USD', 'EUR', 'GBP'],
  }

  render() {
    const { currency, posCurrencies } = this.state;
    const { bpi } = this.props;

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpi[currency].description}:
            <span class="badge badge-primary">{bpi[currency].code}</span>
            <strong>{bpi[currency].rate}</strong>
          </li>
        </ul>
        <br />
        <select
          onChange={e => {
            console.log("CHANGED TO", e.target.value);
            this.setState({ currency: e.target.value })
          }}
          className="form-control"
        >
          {posCurrencies.map(c => (
            <option value={c} selected={c===currency}>{c}</option>
          ))}
        </select>
      </div>
    )
  }
}


export default Prices;