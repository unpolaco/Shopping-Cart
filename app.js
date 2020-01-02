class App extends React.Component {

  state = {
    cartItems: 0,
    availableItems: 7,
  }
  handleIncrement = () => {
  this.setState({ cartItems: this.state.cartItems + 1 })
}
  handleDecrement = () => {
  this.setState({ cartItems: this.state.cartItems - 1 })
}
  handleBuy = () => {
    this.setState({ availableItems: this.state.availableItems - this.state.cartItems})
      this.setState({ cartItems: 0 })
    
  }

  render() {
    return (
      <div>
      
      <button onClick={this.handleDecrement} disabled={this.state.cartItems=== 0 ? true : false}>-</button>
      <span>  {this.state.cartItems}  </span>
      <button onClick={this.handleIncrement} disabled={this.state.availableItems === this.state.cartItems}>+</button>
      <button onClick={this.handleBuy}>Kup teraz</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))