import * as React from "react";
import "./App.css";
import lottery from "./lottery";
import web3 from "./web3";

interface ILotteryState {
  manager: string;
  players: string[];
  balance: string;
  value: string;
  message: string;
}

class App extends React.Component<{}, ILotteryState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      manager: "",
      players: [],
      // tslint:disable-next-line:object-literal-sort-keys
      balance: "",
      value: "",
      message: ""
    };
  }

  public async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  public render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}. There are currently{" "}
          {this.state.players.length} people entered, competing to win{" "}
          {web3.utils.fromWei(this.state.balance, "ether")} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input value={this.state.value} onChange={this.onInputChange} />
          </div>
          <button>Enter</button>
        </form>
        <hr />

        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>

        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }

  private onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({ message: "A winner has been picked!" });
  }

  private onSubmit = async (e: any) => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: "Waiting on transaction success..." });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value)
    });

    this.setState({ message: "You have been entered!" });
  };

  private onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.currentTarget.value;
    this.setState({
      value: amount
    });
  };
}

export default App;
