import React, { Component } from 'react';
import Sayur from '../../assets/sayur.jpg';
import './Product.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BiBasket } from 'react-icons/bi';

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
      <div className="wrapper">
        <div className="app">
          <div className="navbar">
            <h2>Toko</h2>
            <div className="basket">
              <BiBasket size={32} />
              <div className="value__counter">{this.state.order}</div>
            </div>
          </div>
          <main>
            <img src={Sayur} alt="sayur" />
            <div className="counter">
              <button className="minus" onClick={this.handleMinus}>
                <AiOutlineArrowLeft />
              </button>
              <input type="text" value={this.state.order} />
              <button className="plus" onClick={this.handlePlus}>
                <AiOutlineArrowRight />
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Product;
