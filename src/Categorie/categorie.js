import React from 'react';
import { List, NumberField, Datagrid, TextField } from 'react-admin';



// const PostFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="nom" alwaysOn />
//     </Filter>
// );

export const CategorieList = props => (
    <List {...props} >
        <Datagrid>
            <NumberField label="ID Categorie" source="id" />
            <TextField source="nom_categorie" />
            <TextField source="chemin_badge" />
        </Datagrid>
    </List>
);