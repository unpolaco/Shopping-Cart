class App extends React.Component {

  state = {
    cartItems: 0,
    availableItems: 11,
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
      <div className="wrapper">
      <div className="cartButtons">
        <button onClick={this.handleDecrement} disabled={this.state.cartItems=== 0 ? true : false}>-</button>
        <div className="number">{this.state.cartItems}</div>
        <button onClick={this.handleIncrement} disabled={this.state.availableItems === this.state.cartItems}>+</button>
        <button onClick={this.handleBuy}>Kup teraz</button>
      </div>
      
      <p>Dostępne produkty: {this.state.availableItems}</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))