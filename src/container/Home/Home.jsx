import React, { Component } from 'react';
import Card from '../../component/card/Card';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Card judul="js" artikel="ini artikel tentang js" />
        <Card judul="C++" artikel="ini artikel tentang c++" />
        <Card />
      </div>
    );
  }
}

export default Home;
