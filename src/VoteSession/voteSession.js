import React from 'react';
import { List, ReferenceInput, ReferenceField, SelectInput, DateField, NumberField, Create, Edit, SimpleForm, DisabledInput,  DateInput, Datagrid, FunctionField, TextField, EditButton } from 'react-admin';

export const VoteSessionList = props => (
    <div>
    <List {...props} >
        <Datagrid>
            <TextField label="Code Analytique" source="codeAnalytique" />
            <ReferenceField label="Pilote" source="idPilote" reference="user">
                <FunctionField label="Nom Prenom" render={record => `${record.nom} ${record.prenom}`} />                            
            </ReferenceField>
            <DateField label="Date Début"source="dateDebut" />
            <DateField label="Date Fin" source="dateFin"/>
            <EditButton/>
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
    <Edit {...props} >
        <SimpleForm>
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