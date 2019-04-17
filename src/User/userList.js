import React from 'react';
import { FunctionField,  ArrayInput, SimpleFormIterator,  Filter, List, SelectInput, ReferenceInput, NumberField, Create, Edit, SimpleForm, DisabledInput, TextInput,  Datagrid, TextField, EditButton } from 'react-admin';

 const PostFilter = (props) => (
    <Filter {...props}>
         <TextInput label="Chercher par nom" source="nom" alwaysOn />
         <ReferenceInput label="Chercher par groupe" source="groupe" reference="groupe" alwaysOn>
            <SelectInput  optionText="nom" />
         </ReferenceInput>
     </Filter>
 );

export const UserList = props => (
    <div>
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <NumberField label="ID" source="id"/>
            <FunctionField label="Nom Prenom" render={record => `${record.nom} ${record.prenom}`} />            
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
    <Edit {...props}>
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
