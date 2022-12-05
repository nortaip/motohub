import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,

} from '@ionic/react';
import Profilesettings from '../components/profilesettings';
import '../components/Main.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

        <IonToolbar>
          <IonTitle>Мой профиль</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar><div ></div>
            <IonTitle className='bg-red'size="large">Мой профиль</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Profilesettings />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;