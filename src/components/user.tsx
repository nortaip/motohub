import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Profilesettings from '../components/profilesettings';
import '../components/Main.css';
import Usercard from '../components/usercard';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className='bg-red'></div>
        <Usercard />
        <Profilesettings />
      </IonContent>
    </IonPage>
  );
};

export default Profile;