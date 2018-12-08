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
    <table className="ladder" data-conference="0">
      <thead>
        <tr>
          <th scope="col">Pos</th>
          <th scope="col">Club</th>
          <th scope="col">Pl</th>
          <th scope="col">GD</th>
          <th scope="col">Pts</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.rank} className="ladder__team team">
            <td className="team__pos">{item.rank}</td>
            <td className="team__name">
              <span>{item.team.name}</span>
            </td>
            <td className="team__played">{item.matches}</td>
            <td className="team__gd">{item.difference}</td>
            <td className="team__points">{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const domContainer = document.querySelector("#sfc-app");
ReactDOM.render(e(App), domContainer);
