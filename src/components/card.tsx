
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonCol, IonRow } from '@ionic/react';
import { heart } from 'ionicons/icons';
import Cardmain from './cardmain'
import './Main.css';


function Card() {
    return (
        <div className='main-contenttt'>
            <h4 className='whh'> Подборка для вас</h4>
            <IonRow className='card-group'>
                <Cardmain />
            </IonRow>
        </div>
    );
}
export default Card;