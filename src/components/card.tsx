
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonCol, IonRow } from '@ionic/react';
import { heart } from 'ionicons/icons';
import './Main.css';


function Card() {
    return (
        <div className='main-contenttt'>
            <h4 className='whh'> Подборка для вас</h4>
            <IonRow className='card-group'>
                <IonCol class='card' >
                    <div className='badge'>
                        <div className="user-Sales ">Продано</div>
                        <div className="like"><IonIcon icon={heart} className='like' /></div>
                    </div>
                    <img className='img-card' alt="moto" src="assets/images/moto.jpg" />
                    <IonCardHeader className='info'>
                        <IonCardSubtitle class='subtitle'>Уже продан</IonCardSubtitle>
                        <IonCardTitle class='Title'>Harley-Davidsouun</IonCardTitle>
                        <IonCardContent class='time'>2020 г., 50 000кm</IonCardContent>
                    </IonCardHeader>
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
            </IonRow>
        </div>
    );
}
export default Card;