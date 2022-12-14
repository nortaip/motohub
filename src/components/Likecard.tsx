import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonCol, IonGrid, IonRow } from '@ionic/react';
import './Main.css';
import { heart } from 'ionicons/icons';

function Likecard() {
    return (
        <>
            <IonGrid className='products'>
                <IonRow className='card-group'>
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
                    <IonCol class='card'>
                        <div className='badge'>
                            <div className="badge-pr">реклама</div>
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
                <IonRow className='card-group'>
                    <IonCol class='card'>
                        <div className='badge'>
                            <div className="user-Under-review">На проверке</div>
                            <div className="like"><IonIcon icon={heart} className='like' /></div>
                        </div>
                        <img className='img-card' alt="moto" src="assets/images/moto.jpg" />
                        <IonCardHeader className='info'>
                            <IonCardSubtitle class='subtitle'>Уже продан</IonCardSubtitle>
                            <IonCardTitle class='Title'>Harley-Davidson</IonCardTitle>
                            <IonCardContent class='time'>2020 г., 50 000кm</IonCardContent>
                        </IonCardHeader>
                    </IonCol>
                    <IonCol class='card'>
                        <div className='badge'>
                            <div className="user-Published">Опубликовано</div>
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
            </IonGrid>
        </>
    );
}
export default Likecard;
