import React from 'react';
import {
    IonContent,
    IonPage,
} from '@ionic/react';
import Menu from '../components/Menu'
import Headermain from '../components/Headermain';
import '../components/Main.css'
import Catagory from './Catagory';
import Card from './card';


const Tab5: React.FC = () => {
    return (
        <><IonPage>
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
        </IonPage >
        </>
    );
};

export default Tab5;