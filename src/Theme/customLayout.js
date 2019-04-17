// in src/MyLayout.js
import { Layout } from 'react-admin';
import React from 'react';

import MyMenu from './customMenu';


const MyLayout = props => <Layout
    {...props}
    menu={MyMenu}

/>;

export default MyLayout;