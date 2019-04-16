// in src/App.js
import React from 'react';

import { Route } from "react-router";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from './ra-data';
import { UserList, UserCreate, UserEdit } from './User/userList';
import { PromoList, PromoCreate, PromoEdit } from './Promo/promo';
import { GroupeList } from './Groupe/groupe';
import { CategorieList } from './Categorie/categorie';
import { VoteSessionList, VoteSessionCreate, VoteSessionEdit } from './VoteSession/voteSession';
import authProvider from './authProvider';
import { validationList, validationCreate } from './Validation/validation';
import { SoftSkillList } from './Softskills/Softskill';
import CustomRouteLayout from "./customRouteLayout";

const App = () => (
  
  <Admin 
  authProvider={authProvider} 
  dataProvider={jsonServerProvider('http://localhost:1337')}
  customRoutes={[<Route exact path="/custom2" component={CustomRouteLayout} />]}
  >
      <Resource name="user" list={UserList} create={UserCreate} edit={UserEdit}/>
      <Resource name="promo" list={PromoList} create={PromoCreate} edit={PromoEdit}/>
      <Resource name="groupe" list={GroupeList} />
      <Resource name="validationsoftskill" list={validationList} create={validationCreate}/>
      <Resource name="softskill" list={SoftSkillList} />
      <Resource name="categorie" list={CategorieList} />
      <Resource name="sessionvote" list={VoteSessionList} create={VoteSessionCreate} edit={VoteSessionEdit}/>      
  </Admin>
);
export default App;