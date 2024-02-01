import React from 'react';
import {
    IonContent,
    IonPage,
} from '@ionic/react';
import Menu from './Menu'
import Headermain from './Headermain';
import '../components/Main.css'
import Card from './card';

const Mainpage: React.FC = () => {
    return (
        <>
            <IonPage id="main-content">
                <Menu />
                <Headermain />
                <IonContent className="ion-padding">
                        <div className='bg-red'></div>
                        <Card />
                </IonContent>
            </IonPage>
        </>
    );
};

export default Mainpage;