import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';



export const GroupeList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
        </Datagrid>
    </List>
);
