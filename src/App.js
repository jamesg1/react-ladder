"use strict";

const e = React.createElement;

class App extends React.Component {
  state = {
    loading: true,
    data: ""
  };
  componentDidMount() {
    axios
      .get(
        "https://cors.io/?https://a.ergebnis-dienst.de/weltfussball/tabellenrechner/en/rpc_standings/se28510",
        { crossdomain: true }
      )
      .then(response => {
        this.setState({ data: response.data.standing, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { loading, data } = this.state;
    return <div>{loading ? "Loading" : <Table data={data} />}</div>;
  }
}

const Table = ({ data }) => {
  return (
    <table className="ladder-table" data-conference="0">
      <thead>
        <tr>
          <th className="ladder-table__position-heading">Pos</th>
          <th className="text--left ladder-table__club-heading">Club</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th className="ladder-table__points-heading">Pts</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.rank} className="ladder-table__item">
            <td className="ladder-table__position">{item.rank}</td>
            <td className="ladder-table__name text--left">
              <span>{item.team.name}</span>
            </td>
            <td className="ladder-table__played">{item.matches}</td>
            <td className="ladder-table__won">{item.win}</td>
            <td className="ladder-table__draw">{item.draw}</td>
            <td className="ladder-table__lose">{item.lost}</td>
            <td className="ladder-table__gf">{item.score}</td>
            <td className="ladder-table__ga">{item.score_against}</td>
            <td className="ladder-table__ga">{item.difference}</td>
            <td className="ladder-table__points">{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const domContainer = document.querySelector("#sfc-app");
ReactDOM.render(e(App), domContainer);
