import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonRadio,
    IonLabel,
    IonRadioGroup
} from '@ionic/react';
import '../components/Main.css';
function Language() {
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
                <IonRadioGroup value="Language">
                    <IonItem>
                        <IonLabel className='h4-regular'>Azərbaycan</IonLabel>
                        <IonRadio slot="end" value="Azərbaycan"></IonRadio>
                    </IonItem>

                    <IonItem>
                        <IonLabel className='h4-regular'>Русский</IonLabel>
                        <IonRadio slot="end" value="Русский"></IonRadio>
                    </IonItem>

                    <IonItem>
                        <IonLabel className='h4-regular'>English</IonLabel>
                        <IonRadio slot="end" value="English"></IonRadio>
                    </IonItem>
                </IonRadioGroup>
                <IonButton className='btn'>Save</IonButton>
            </IonContent>
        </>
    );
}

export default Language;