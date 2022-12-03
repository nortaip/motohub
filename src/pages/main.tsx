import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Tab from '../components/menu';

function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    // Any calls to load data go here
    event.detail.complete();
  }, 2000);
}

const main: React.FC = () => {
  return (
    <IonPage>
      <Tab />
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="main page" />
      </IonContent>
    </IonPage>
  );
};

export default main;
