import React from 'react';
import { List, ReferenceInput, ReferenceField, SelectInput, DateField, NumberField, Create, Edit, SimpleForm, DisabledInput,  DateInput, Datagrid, TextField, EditButton } from 'react-admin';

// const PostFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="nom" alwaysOn />
//     </Filter>
// );


export const VoteSessionList = props => (
    <div>
    <List {...props} >
        <Datagrid>
            <NumberField source="id" />
            <TextField label="Code Analytique" source="codeAnalytique" />
            <ReferenceField label="Pilote" source="idPilote" reference="user">
                <TextField source="nom" />
            </ReferenceField>
            <DateField label="Date Début"source="dateDebut" />
            <DateField label="Date Fin" source="dateFin"/>
            <EditButton/>
            <reqVoteSessionBtn/>
        </Datagrid>
    </List>
    </div>
);

const FullNameField = ({ record }) => <span>{record.nom} {record.prenom}</span>;
const DefaultValue = { idPilote: localStorage.getItem('id') }
export const VoteSessionCreate = (props) => (
    <Create {...props} >
        <SimpleForm defaultValue={DefaultValue}>
            <ReferenceInput label="Promo" source="codeAnalytique" reference="promo">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            <DateInput label="Date Début" source="dateDebut" />
            <DateInput label="Date Fin" source="dateFin" />        
        </SimpleForm>
    </Create>
);

     

export const VoteSessionEdit = (props) => (
    <Edit title={<userTitle />} {...props} >
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <ReferenceInput label="Promo" source="codeAnalytique" reference="promo">
                <SelectInput optionText="nom"/>
            </ReferenceInput>
            <ReferenceInput label="Pilote" source="idPilote" reference="user">
                <SelectInput optionText={<FullNameField/>}/>
            </ReferenceInput>
            <DateInput label="Date Début" source="dateDebut" />
            <DateInput label="Date Fin" source="dateFin" />            
        </SimpleForm>
    </Edit>
);