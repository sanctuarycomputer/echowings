import React from 'react';
import ReactOnRails from 'react-on-rails';

import Echowings from '../containers/Echowings';

const EchowingsApp = (props) => (
  <Echowings {...props} />
);

ReactOnRails.register({ EchowingsApp });
