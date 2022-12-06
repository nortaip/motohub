import { IonGrid, IonRow, IonCard, IonCol, IonLabel, IonNavLink, } from '@ionic/react';
import './Main.css';
// import Mopeds from './Moped';
function catbtn() {
    return (
        <>
            <IonGrid className='catagory-add'>
                <IonRow className='sb'>
                    <IonCol className='cat'>
                        <IonCard class='card-cat'>
                            <img className='svg' alt="Велосипед" src="assets/images/pedal_bike.svg" />
                        </IonCard>
                        <IonLabel className='Crardlabel'><h6 className='h6'>Велосипед</h6></IonLabel>
                    </IonCol>
                    <IonCol className='cat'>
                        <IonCard class='card-cat' >
                            <img className='svg' alt="Мопед" src="assets/images/moped.svg" />
                        </IonCard>
                        <IonLabel className='Crardlabel'><h6 className='h6'>Мопед</h6></IonLabel>
                    </IonCol>
                    <IonCol className='cat'>
                        <IonCard class='card-cat' >
                            <img className='svg' alt="Скутер" src="assets/images/electric_scooter.svg" />
                        </IonCard>
                        <IonLabel className='Crardlabel'><h6 className='h6'>E-Скутер</h6></IonLabel>
                    </IonCol>
                    <IonCol className='cat'>
                        <IonCard class='card-cat'>
                            <img className='svg' alt="E-Мопед" src="assets/images/electric_moped.svg" />
                        </IonCard>
                        <IonLabel className='Crardlabel'><h6 className='h6'>E-Мопед</h6></IonLabel>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}
export default catbtn;