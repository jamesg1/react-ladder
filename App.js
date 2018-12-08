"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loading: true,
      data: ""
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("https://cors.io/?https://a.ergebnis-dienst.de/weltfussball/tabellenrechner/en/rpc_standings/se28510", { crossdomain: true }).then(function (response) {
        _this2.setState({ data: response.data.standing, loading: false });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          data = _state.data;

      return React.createElement(
        "div",
        null,
        loading ? "Loading" : React.createElement(Table, { data: data })
      );
    }
  }]);

  return App;
}(React.Component);

var Table = function Table(_ref2) {
  var data = _ref2.data;

  return React.createElement(
    "table",
    { className: "ladder-table", "data-conference": "0" },
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          { className: "ladder-table__position-heading" },
          "Pos"
        ),
        React.createElement(
          "th",
          { className: "text--left ladder-table__club-heading" },
          "Club"
        ),
        React.createElement(
          "th",
          null,
          "P"
        ),
        React.createElement(
          "th",
          null,
          "W"
        ),
        React.createElement(
          "th",
          null,
          "D"
        ),
        React.createElement(
          "th",
          null,
          "L"
        ),
        React.createElement(
          "th",
          null,
          "GF"
        ),
        React.createElement(
          "th",
          null,
          "GA"
        ),
        React.createElement(
          "th",
          null,
          "GD"
        ),
        React.createElement(
          "th",
          { className: "ladder-table__points-heading" },
          "Pts"
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      data.map(function (item) {
        return React.createElement(
          "tr",
          { key: item.rank, className: "ladder-table__item" },
          React.createElement(
            "td",
            { className: "ladder-table__position" },
            item.rank
          ),
          React.createElement(
            "td",
            { className: "ladder-table__name text--left" },
            React.createElement(
              "span",
              null,
              item.team.name
            )
          ),
          React.createElement(
            "td",
            { className: "ladder-table__played" },
            item.matches
          ),
          React.createElement(
            "td",
            { className: "ladder-table__won" },
            item.win
          ),
          React.createElement(
            "td",
            { className: "ladder-table__draw" },
            item.draw
          ),
          React.createElement(
            "td",
            { className: "ladder-table__lose" },
            item.lost
          ),
          React.createElement(
            "td",
            { className: "ladder-table__gf" },
            item.score
          ),
          React.createElement(
            "td",
            { className: "ladder-table__ga" },
            item.score_against
          ),
          React.createElement(
            "td",
            { className: "ladder-table__ga" },
            item.difference
          ),
          React.createElement(
            "td",
            { className: "ladder-table__points" },
            item.points
          )
        );
      })
    )
  );
};

var domContainer = document.querySelector("#sfc-app");
ReactDOM.render(e(App), domContainer);