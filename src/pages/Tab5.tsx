import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Tab from '../components/menu'

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <Tab />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 5 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
