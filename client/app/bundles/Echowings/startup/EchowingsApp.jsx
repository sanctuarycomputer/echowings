import React from 'react';
import ReactOnRails from 'react-on-rails';
import 'whatwg-fetch';

import Echowings from '../containers/Echowings';

const EchowingsApp = (props) => (
  <Echowings {...props} />
);

ReactOnRails.register({ EchowingsApp });
