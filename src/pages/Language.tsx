import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonCheckbox,
    IonLabel
} from '@ionic/react';
import '../components/Main.css';
function PInformation() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Язык</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonItem>
                    <IonCheckbox slot="end"></IonCheckbox>
                    <IonLabel className='h4-regular'>Azərbaycan</IonLabel>
                </IonItem>
                <IonItem>
                    <IonCheckbox slot="end"></IonCheckbox>
                    <IonLabel className='h4-regular'>Русский</IonLabel>
                </IonItem>
                <IonItem>
                    <IonCheckbox slot="end"></IonCheckbox>
                    <IonLabel className='h4-regular'>English</IonLabel>
                </IonItem>
                <IonButton className='btn'>Save</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;