import React from 'react';
import Layout from '../components/layout.js';

class PurchaseButton extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_h3rd30fYY2Arl8CAkPL1uohh');
  }

  handleSubmit = e => {
    e.preventDefault();
    this.stripe
      .redirectToCheckout({
        items: [{ sku: 'sku_F3yLrjFRzs2oZ0', quantity: 1 }],

        successUrl: 'http://localhost:8000/success',
        cancelUrl: 'http://localhost:8000/cancel'
      })
      .then(function(result) {
        if (result.error) {
          console.error(result.error.message);
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Buy T-Shirt!</button>
      </form>
    );
  }
}

const Shop = () => {
  return (
    <Layout>
      <h2>Shop</h2>
      <PurchaseButton />
    </Layout>
  );
};

export default Shop;
