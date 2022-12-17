import '../components/Main.css';
import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';

import Likecard from '../components/Likecard';

function PageTwo() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle class="ion-text-center">Мопеды</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow>
        <IonButtons>
          <IonCol>
            <IonButton className='filter-madal'>Фильтр  <IonIcon icon={optionsOutline} /></IonButton>
          </IonCol>
        </IonButtons>
      </IonRow>
      <IonContent class="ion-padding">
        <Likecard />
      </IonContent>
    </>
  );
}

export default PageTwo;