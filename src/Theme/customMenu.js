// in src/MyMenu.js
import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';
import CloudUpload from '@material-ui/icons/CloudUpload';

const MyMenu = ({ resources, onMenuClick, logout }) => (
    <div>
        {resources.map(resource => (
            
            <MenuItemLink leftIcon={ resource.icon ? <resource.icon /> : <CloudUpload/> } key={resource.name} to={`/${resource.name}`} primaryText={resource.options.label} onClick={onMenuClick} />
        ))}
        <MenuItemLink to="/import" leftIcon={<CloudUpload/>} primaryText="Import CSV" onClick={onMenuClick} />
        <Responsive
            small={logout}
            medium={null} // Pass null to render nothing on larger devices
        />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));