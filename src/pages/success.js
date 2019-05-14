
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Success = () => {
  return (
    <Layout>
      <h2>You bought that thing!</h2>
      <p>Nice doing business with you!</p>
      <Link to="/shop">Go back to the shop</Link>
    </Layout>
  );
};

export default Success;
