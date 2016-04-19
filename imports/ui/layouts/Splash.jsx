import React from 'react';

import { Header } from '../components/common/Header.jsx';

export default Splash = ({ content }) => {
  return (
    <div>
      <Header />
      <div className="container splash">
        <img className="img-rounded" src="http://i.giphy.com/iaUwUWwY99Tuo.gif" />
        <h2>Does your startup generates revenue?</h2>
        { content() }
      </div>
    </div>
  );
};
