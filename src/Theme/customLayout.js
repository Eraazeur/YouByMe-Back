// in src/MyLayout.js
import { Layout, UserMenu, MenuItemLink } from 'react-admin';
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import MyMenu from './customMenu';


const MyLayout = props => <Layout
    {...props}
    menu={MyMenu}

/>;

export default MyLayout;