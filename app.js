class App extends React.Component {

  state = {
    cartItems: 2,
    avilableItems: 7,
  }
  handleIncrement = () => {
  this.setState({ cartItems: this.state.cartItems + 1 })
}
  handleDecrement = () => {
  this.setState({ cartItems: this.state.cartItems - 1 })
}

  render() {
    return (
      <div>
      <button onClick={this.handleDecrement} disabled={this.state.cartItems=== 0 ? true : false}>-</button>
      <span>  {this.state.cartItems}  </span>
      <button onClick={this.handleIncrement.bind(this)} disabled={this.state.avilableItems === this.state.cartItems}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))