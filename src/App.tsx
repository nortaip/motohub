import { Redirect, Route } from 'react-router-dom';
// import Icon from 'react-native-ionicons'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { search, home, addCircle, heartOutline, personOutline } from 'ionicons/icons';
import Main from './pages/main';
import Search from './pages/Search';
import Add from './pages/Add';
import Likes from './pages/Likes';
import Profile from './pages/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route path="/Add">
            <Add />
          </Route>
          <Route path="/Likes">
            <Likes />
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="main" href="/main">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Search" href="/Search">
            <IonIcon icon={search} />
            <IonLabel>search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Add" href="/Add">
            <IonIcon icon={addCircle} />
            <IonLabel>Add</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Likes" href="/Likes">
            <IonIcon icon={heartOutline} />
            <IonLabel>Likes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Profile" href="/Profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
