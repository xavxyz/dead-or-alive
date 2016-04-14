import React from 'react';

import { Header } from '../components/common/Header.jsx';
import { Footer } from '../components/common/Footer.jsx';

export default Splash = ({ content }) => {
  return (
    <div>
      <img className="ui image fluid" src="http://i.giphy.com/iaUwUWwY99Tuo.gif" />
      <Header />
      <h2 className="ui center aligned header">Does your startup generates revenue?</h2>
      { content() }
      <Footer />
    </div>
  );
};
