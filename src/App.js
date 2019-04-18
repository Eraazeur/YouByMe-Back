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
import { TracaVoteList } from './TracabiliteVote/TracebiliteVote';
import CustomRouteLayout from "./Import/customRouteLayout";
import People from '@material-ui/icons/People';
import Class from '@material-ui/icons/Class';
import Grade from '@material-ui/icons/Grade';
import CheckCircle from '@material-ui/icons/CheckCircle';
import List from '@material-ui/icons/List';
import PageView from '@material-ui/icons/Pageview';
import MyLayout from './Theme/customLayout';



const App = () => (
  
  <Admin 
  appLayout={MyLayout}
  authProvider={authProvider} 
  dataProvider={jsonServerProvider('http://localhost:1337')}
  customRoutes={[<Route exact path="/import" component={CustomRouteLayout} />]}
  >
      <Resource name="user" options={{ label: 'Utilisateurs' }} icon={People} list={UserList} create={UserCreate} edit={UserEdit}/>
      <Resource name="promo" options={{ label: 'Promotions' }}list={PromoList} icon={Class} create={PromoCreate} edit={PromoEdit}/>
      <Resource name="groupe" options={{ label: 'Groupe' }} icon={Grade} list={GroupeList} />
      <Resource name="validationsoftskill" icon={CheckCircle} options={{ label: 'Valider SoftSkill' }}list={validationList} create={validationCreate}/>
      <Resource name="softskill"  icon={List} options={{ label: 'SoftSkill' }} list={SoftSkillList} />
      <Resource name="categorie" icon={List} options={{ label: 'Catégorie' }} list={CategorieList} />
      <Resource name="sessionvote" icon={List} options={{ label: 'Session de vote' }} list={VoteSessionList} create={VoteSessionCreate} edit={VoteSessionEdit}/>      
      <Resource name="tracabilitevote" icon={PageView} options={{ label: 'Suivi des votes' }} list={TracaVoteList}/>      
  </Admin>
);
export default App;