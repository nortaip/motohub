
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import Cardmain from './cardmain'
import './Main.css';


function Card() {
    return (

        <IonGrid className='products'>
            <h4 className='whh'> Подборка для вас</h4>
            <div className="dd">
                <IonRow className='card-group'>
                    <Cardmain />
                </IonRow>
                <IonRow className='card-group'>
                    <Cardmain />
                </IonRow>
                <IonRow className='card-group'>
                    <Cardmain />
                </IonRow>
            </div>
        </IonGrid>
    );
}
export default Card;