import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout.js';

class Product extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_h3rd30fYY2Arl8CAkPL1uohh');
  }

  handleSubmit = (e, sku) => {
    e.preventDefault();
    this.stripe
      .redirectToCheckout({
        items: [{ sku, quantity: 1 }],

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
    const { id, currency, price, name, image } = this.props;

    const priceFloat = (price / 100).toFixed(2);
    const formattedPrice = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(priceFloat);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e, id)}>
          <h2>
            {name} ({formattedPrice})
          </h2>
          <img src={image} style={{ display: 'block', height: 256 }} />
          <button type="submit">Buy Now!</button>
        </form>
        <hr />
      </div>
    );
  }
}

const Shop = () => (
  <StaticQuery
    query={graphql`
      {
        allStripeSku {
          nodes {
            id
            price
            currency
            attributes {
              name
            }
            image
          }
        }
      }
    `}
    render={({ allStripeSku }) => (
      <Layout>
        {allStripeSku.nodes.map(sku => (
          <Product
            id={sku.id}
            currency={sku.currency}
            price={sku.price}
            name={sku.attributes.name}
            image={sku.image}
          />
        ))}
      </Layout>
    )}
  />
);

export default Shop;
