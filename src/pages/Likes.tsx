import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonPage,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton
} from '@ionic/react';
import '../components/Main.css'
import Segment from '../components/segment';
import LikeCards from '../components/Likecard'

const LIkes: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle class="ion-text-center">Обьявления</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        <Segment />
        <LikeCards />
        <IonButton expand="block" className='btn'>Разместить бесплатно</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LIkes;
