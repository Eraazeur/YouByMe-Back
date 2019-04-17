import React from 'react';
import { FunctionField,  DateField, ReferenceField,  Filter, List, SelectInput, ReferenceInput, NumberField, Create, Edit, SimpleForm, DisabledInput, TextInput,  Datagrid, TextField, EditButton } from 'react-admin';

export const TracaVoteList = props => (
    <div>
    <List {...props} >
        <Datagrid>
            <ReferenceField source="votant" reference="user">
                <FunctionField render={record => `${record.nom} ${record.prenom}`} />                                          
            </ReferenceField>  
            <ReferenceField source="recevant" reference="user">
                <FunctionField render={record => `${record.nom} ${record.prenom}`} />                                          
            </ReferenceField>
            <ReferenceField source="softskill" reference="softskill">
                <TextField source="nom"/>
            </ReferenceField>
            <DateField source="date"/>
        </Datagrid>
    </List>
    </div>
);