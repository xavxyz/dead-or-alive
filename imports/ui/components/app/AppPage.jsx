import React from 'react';

import ProfileContainer from '../../containers/ProfileContainer.jsx';
import RevenuesContainer from '../../containers/RevenuesContainer.jsx';

export default TreePage = () => {

  return (
    <div className="row">
      <ProfileContainer />

      <RevenuesContainer />
    </div>
  );
};