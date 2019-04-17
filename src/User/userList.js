import React from 'react';
import { ArrayInput, SimpleFormIterator,  Filter, List, SelectInput, ReferenceInput, NumberField, Create, Edit, SimpleForm, DisabledInput, TextInput,  Datagrid, TextField, EditButton } from 'react-admin';

 const PostFilter = (props) => (
    <Filter {...props}>
         <TextInput label="Search"placeholder="Rechercher un nom" source="nom" alwaysOn />
     </Filter>
 );

export const UserList = props => (
    <div>
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <NumberField label="ID" source="id"/>
            <TextField label="Nom" source="nom"/>
            <TextField label="Prenom" source="prenom"/>
            <TextField label="Email" source="email" type="email"/>
            <TextField label="Promo" source="promos[0].nom"/>
            <TextField label="Groupe" source="groupe.nom"/>
            <EditButton/>
        </Datagrid>
    </List>
    </div>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Nom" source="nom"/>
            <TextInput label="Prénom" source="prenom"/>
            <TextInput type="email" label="Email" source="email"/>
            <ReferenceInput label="Promo" source="promos" reference="promo">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            <ReferenceInput label="Groupe" source="groupe" reference="groupe">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<userTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput label="Nom" source="nom"/>
            <TextInput label="Prénom" source="prenom"/>
            <TextInput label="Email" source="email" type="email" />
            <ReferenceInput label="Promo" source="promos[0].id" reference="promo">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            <ReferenceInput label="Groupe" source="groupe.id" reference="groupe">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            <ArrayInput source="votes">
                <SimpleFormIterator>
                    <ReferenceInput label="Badges" source="id" reference="categorie">
                        <SelectInput optionText="nom_categorie"/>
                    </ReferenceInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
