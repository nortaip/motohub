
import { IonCard, IonIcon, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonItem, IonRow } from '@ionic/react';
import { heart } from 'ionicons/icons';
import './Main.css';


function Card() {
    return (

        <IonGrid className='products'>
            <h4 className='wh'> Подборка для вас</h4>
            <div className="dd">
                <IonRow className='card-group'>
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
                    <IonCol class='card'>
                        <div className='badge'>
                            <div className="badge-end">просмотрено</div>
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
                            <div className="badge-new">новый</div>
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
            </div>
        </IonGrid>
    );
}
export default Card;