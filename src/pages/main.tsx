import { IonContent, IonPage, IonItem, IonRefresher, IonRefresherContent, RefresherEventDetail, IonButtons, IonMenuButton } from '@ionic/react';
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
      <IonContent fullscreen className='container'>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent>
          </IonRefresherContent>
        </IonRefresher>
        <Headermain />
        <div className='main-content'>
          <Catagory />
          <Card />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default main;
