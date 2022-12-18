import React from 'react';
import { IonContent } from '@ionic/react';
import Profilesettings from '../components/profilesettings';
import '../components/Main.css';

const Profile: React.FC = () => {
    return (
        <>
            <IonContent>
                <div className='bg-red'></div>
                <div className='user-main'>
                    <div className="user-info">
                        <h4 className='whh'>Мамед Мамедов</h4>
                        <h5 className='whh'>Просто хороший парень</h5>
                        <p className='user-badge'>проверенный</p>
                    </div>
                </div>
                <Profilesettings />
            </IonContent>
        </>
    );
};

export default Profile;