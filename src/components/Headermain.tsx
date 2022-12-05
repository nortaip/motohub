import { IonButtons, IonMenuButton, IonToolbar } from '@ionic/react';
import './Main.css';


const main: React.FC = () => {
    return (
        <IonToolbar class='header'>
            <IonButtons slot="start">
                <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <img src='assets/images/logo.png' className='Logo' />
        </IonToolbar>
    );
};

export default main;
