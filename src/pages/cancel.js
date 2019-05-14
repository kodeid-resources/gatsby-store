import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const Cancel = () => {
  return (
    <Layout>
      <h2>Canceled.</h2>
      <p>Nothing happenend.</p>
      <Link to="/shop">Go back to the shop</Link>
    </Layout>
  );
};

export default Cancel;
