import React from 'react';
import MainLayout from 'layouts/main';
import Link from 'components/shared/link';

export default () => (
  <MainLayout>
    <div className="container">
      <div className="columns">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
      </div>

      <Link to="/page-2">Page 2</Link>
    </div>
  </MainLayout>
);
