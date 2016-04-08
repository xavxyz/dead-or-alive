//import '/imports/api/revenues/api';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('react-root'));
});