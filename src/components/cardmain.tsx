import React, { Component, } from 'react';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonNavLink, IonCol } from '@ionic/react';

import './Main.css';
import { heart } from 'ionicons/icons';
import Mopeds from '../pages/Mopeds'
class CardMain extends Component {
    render() {
        return (
            <>
                <IonCol class='card'>
                    <IonNavLink routerDirection="forward" component={() => <Mopeds />}>
                        <div className='badge'>
                            <div className="user-Sales ">Продано</div>
                            <div className="like"><IonIcon icon={heart} className='like'  /></div>
                        </div>
                        <img className='img-card' alt="moto" src="assets/images/moto.jpg" />
                        <IonCardHeader className='info'>
                            <IonCardSubtitle class='subtitle'>Уже продан</IonCardSubtitle>
                            <IonCardTitle class='Title'>Harley-Davidsouun</IonCardTitle>
                            <IonCardContent class='time'>2020 г., 50 000кm</IonCardContent>
                        </IonCardHeader>
                    </IonNavLink>
                </IonCol>
                <IonCol class='card'>
                    <div className='badge'>
                        <div className="user-Sales ">Продано</div>
                        <div className="like"><IonIcon icon={heart} className='like' /></div>
                    </div>
                    <img className='img-card' alt="moto" src="assets/images/moto.jpg" />
                    <IonCardHeader className='info'>
                        <IonCardSubtitle class='subtitle'>Уже продан</IonCardSubtitle>
                        <IonCardTitle class='Title'>Harley-Davidson</IonCardTitle>
                        <IonCardContent class='time'>2020 г., 50 000кm</IonCardContent>
                    </IonCardHeader>
                </IonCol>

            </>
        );
    }
}

export default CardMain;
