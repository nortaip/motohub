import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonNav
} from '@ionic/react';
import Profilesettings from '../components/profilesettings';
import '../components/Main.css';
import UserInfo from '../components/usercard';
const Tab5: React.FC = () => {
  return (
    <IonPage>

      <IonContent>
        <div className='user-main'>
          <UserInfo />
          <img alt='pp' className='pp' src='/assets/images/profimg.jpg' />
        </div>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className='bg-red' size="large">Мой профиль</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Profilesettings />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;