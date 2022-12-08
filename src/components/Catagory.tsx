
import { IonGrid, IonRow, IonCard, IonCol, IonLabel, } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './Main.css';
import Mopeds from './Moped';

function catagory() {
    return (
        <>
            <IonGrid className='catagory'>
                <h3 className='wh'>Bыбрать категорию</h3>
                <IonReactRouter>
                    <IonRow className='sb'>
                        <IonCol className='cat'>
                            <IonCard class='card-cat'>
                                <img className='svg' alt="Велосипед" src="assets/images/pedal_bike.svg" />
                            </IonCard>
                            <IonLabel className='Crardlabel'><h6 className='h6'>Велосипед</h6></IonLabel>
                        </IonCol>
                        <IonCol className='cat'>
                            <IonCard class='card-cat' >
                                <img className='svg' alt="Скутер" src="assets/images/electric_scooter.svg" />
                            </IonCard>
                            <IonLabel className='Crardlabel'><h6 className='h6'>Скутер</h6></IonLabel>
                        </IonCol>
                        <IonCol className='cat'>
                            <IonCard class='card-cat' >
                                <img className='svg' alt="Мопед" src="assets/images/electric_moped.svg" />
                            </IonCard>
                            <IonLabel className='Crardlabel'><h6 className='h6'>Мопед</h6></IonLabel>
                        </IonCol>
                        <IonCol className='cat'>
                            <IonCard class='card-cat'>
                                <img className='svg' alt="Другое" src="assets/images/apps.svg" />
                            </IonCard>
                            <IonLabel className='Crardlabel'><h6 className='h6'>Другое</h6></IonLabel>
                        </IonCol>
                    </IonRow>
                </IonReactRouter>
            </IonGrid>
        </>
    );
}
export default catagory;