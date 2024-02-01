import React from 'react';
import {
    IonContent,
    IonItem,
    IonLabel,
    IonIcon,
    IonToggle,
} from '@ionic/react';
import '../components/Main.css';
import { moon } from 'ionicons/icons';


function Profile() {
    const toggleDarkModeHandler = () => document.body.classList.toggle('dark');
    return (
        <IonContent>
            <div className='bg-red'></div>

            <IonItem lines="none">
                <IonIcon className='user-icon' slot="start" icon={moon} />
                <IonLabel className='user-p'>Dark Mode</IonLabel>
                <IonToggle
                    slot="end"
                    name="darkMode"
                    onIonChange={toggleDarkModeHandler}
                />
            </IonItem>
        </IonContent>
    );
};

export default Profile;