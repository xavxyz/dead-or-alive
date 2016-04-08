import React from 'react';

import { Footer } from '../components/common/Footer.jsx';

export const Splash = ({ children }) => {
  return (
    <div className="ui container" style={{ marginTop: '10%' }}>
      { children }
      <Footer />
    </div>
  );
};
