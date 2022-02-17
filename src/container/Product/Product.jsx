import React, { Component } from 'react';
import Sayur from '../../assets/sayur.jpg';
import 'boxicons';
import './Product.css';

class Product extends Component {
  state = {
    order: 4,
  };

  handlePlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="navbar">
            <h2>Toko</h2>
            <div className="basket">
              <box-icon size="md" name="basket"></box-icon>
              <div className="value__counter">{this.state.order}</div>
            </div>
          </div>
          <main>
            <img src={Sayur} alt="sayur" />
            <div className="counter">
              <button className="minus" onClick={this.handleMinus}>
                <box-icon name="checkbox-minus"></box-icon>
              </button>
              <input type="text" value={this.state.order} />
              <button className="plus" onClick={this.handlePlus}>
                <box-icon name="plus-circle"></box-icon>
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Product;
