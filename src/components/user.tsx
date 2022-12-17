import React from 'react';
import { IonContent } from '@ionic/react';
import Profilesettings from '../components/profilesettings';
import '../components/Main.css';
import Usercard from '../components/usercard';

const Profile: React.FC = () => {
  return (
    <>
      <IonContent>
        <div className='bg-red'></div>
        <Usercard />
        <Profilesettings />
      </IonContent>
    </>
  );
};

export default Profile;