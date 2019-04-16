import React from 'react';
import { ReferenceInput, SelectInput, List, DateField,  ReferenceField, EditButton, Create,  SimpleForm,  Datagrid, TextField } from 'react-admin';


export const validationList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="Validé Pour" source="id_eleve.id" reference="user">
                <TextField  source="nom"/>
            </ReferenceField>
            <ReferenceField label="Validé Par" source="id_valide_par.id" reference="user">
                <TextField  source="nom"/>
            </ReferenceField>
            <DateField  source="dateValidation"/>
            <ReferenceField label="Catégorie" source="id_t_soft_skill.id" reference="softskill">
                <TextField  source="nom"/>
            </ReferenceField>
        </Datagrid>
    </List>
);

const FullNameField = ({ record }) => <span>{record.nom} {record.prenom}</span>;
const DefaultValue = { dateValidation: new Date(), id_valide_par: localStorage.getItem('id') }
export const validationCreate = (props) => (
    <Create {...props}>
        <SimpleForm defaultValue={DefaultValue}>
            <ReferenceInput label="Valider Pour" source="id_eleve" reference="user">
                <SelectInput optionText={<FullNameField/>}/>
            </ReferenceInput>
            <ReferenceInput label="Softskill" source="id_t_soft_skill" reference="softskill">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            
        </SimpleForm>
    </Create>
);