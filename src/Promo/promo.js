import React from 'react';
import { List, SelectArrayInput, ArrayInput, ReferenceArrayInput , ReferenceInput, SelectInput, SimpleFormIterator, EditButton, NumberInput, Create, Edit, SimpleForm, DisabledInput, TextInput, Datagrid, TextField } from 'react-admin';


export const PromoList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nom" />
            <TextField source="nbVote" />
            <EditButton/>
        </Datagrid>
    </List>
);
export const PromoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Id" source="id"/>
            <TextInput label="Nom" source="nom"/>
            <NumberInput label="Nombre vote" source="nbVote" step={1}/>
        </SimpleForm>
    </Create>
);

export const PromoEdit = (props) => (
    <Edit title={<userTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput label="Nom" source="nom"/>
            <NumberInput label="Nombre vote" source="nbVote" step={1}/>
             <ArrayInput source="users">
                <SimpleFormIterator>
                    <ReferenceInput source="id" reference="user">
                        <SelectInput optionText="nom"/>
                    </ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput> 
            </SimpleForm>
    </Edit>
);
