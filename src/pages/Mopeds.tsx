import '../components/Main.css';
import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { optionsOutline, filterOutline } from 'ionicons/icons';

import Likecard from '../components/Likecard';
import CardLoading from '../components/CardLoading';

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
        <IonCol>
          <IonChip className='filter-madal'><p>Фильтр</p>  <IonIcon className='ce' icon={optionsOutline} /></IonChip>
        </IonCol>
        <IonCol>
          <IonChip className='filter-madal'><p>Сортировка</p> <IonIcon className='ce' icon={filterOutline} /></IonChip>
        </IonCol>
      </IonRow>
      <IonContent class="ion-padding">
        <Likecard />
        <CardLoading/>
      </IonContent>
    </>
  );
}

export default PageTwo;