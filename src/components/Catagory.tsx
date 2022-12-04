
import { IonGrid, IonRow, IonCard, IonCol } from '@ionic/react';
import './Main.css';

function catagory() {
    return (
        <IonGrid>
            <h3>Bыбрать категорию</h3>
            <IonRow>
                <IonCol>
                    <IonCard>
                        <img alt="Велосипед" src="../imgs/logos/apps.svg" />
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <img alt="Скутер" src="../I" />
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <img alt="Мопед" src="../I" />
                    </IonCard>
                </IonCol>
                <IonCol>
                    <IonCard>
                        <img alt="Другое" src="../I" />
                    </IonCard>
                </IonCol>
            </IonRow>

        </IonGrid>

    );
}
export default catagory;