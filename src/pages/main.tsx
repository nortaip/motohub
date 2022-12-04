import { IonContent, IonPage, IonToolbar, IonTitle, IonRefresher, IonRefresherContent, RefresherEventDetail, IonButtons, IonMenuButton } from '@ionic/react';
import Card from '../components/card';
import Headermain from '../components/Headermain';
import Catagory from '../components/Catagory';

function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    // Any calls to load data go here
    event.detail.complete();
  }, 2000);
}

const main: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        <Headermain />
        <Catagory />
        <Card />
      </IonContent>
    </IonPage>
  );
};

export default main;
