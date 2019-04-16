import React from 'react';
import { List, ReferenceField, NumberField,  Datagrid, TextField, EditButton } from 'react-admin';


// const PostFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="nom" alwaysOn />
//     </Filter>
// );

export const SoftSkillList = props => (
    <div>
    <List {...props} >
        <Datagrid>
            <NumberField label="ID" source="id"/>
            <TextField label="Nom" source="nom"/>
            <ReferenceField label="Catégorie" source="idCategorie" reference="categorie">
                <TextField  source="nom_categorie"/>
            </ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
    </div>
);
