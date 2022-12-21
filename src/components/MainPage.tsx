import React from 'react';
import {
    IonContent,
    IonPage,
} from '@ionic/react';
import Menu from './Menu'
import Headermain from './Headermain';
import '../components/Main.css'
import Catagory from './Catagory';
import Card from './card';

const Mainpage: React.FC = () => {
    return (
        <>
            <IonPage >
                <Menu />
                <IonPage id="main-content">
                    <Headermain />
                    <IonContent className="ion-padding">
                        <div className='main-content'>
                            <div className='bg-red'></div>
                            <Catagory />
                            <Card />
                        </div>
                    </IonContent>
                </IonPage>
            </IonPage>
        </>
    );
};

export default Mainpage;