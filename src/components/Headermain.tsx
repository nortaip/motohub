import { IonButtons, IonMenuButton, IonTitle, IonToolbar, RefresherEventDetail, } from '@ionic/react';

import './Main.css';


const main: React.FC = () => {
    return (
        <IonToolbar class='header'>
            <IonButtons slot="start">
                <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <img src='../Imgs/logos/Group.png' alt='Logo' className='Logo' />
        </IonToolbar>
    );
};

export default main;
