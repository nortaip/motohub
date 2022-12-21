import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
} from '@ionic/react';
import { eyeOff } from 'ionicons/icons';

function PInformation() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Войти</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonList>
                    <IonItem >
                        <IonLabel className='label-inputs' position="stacked">Введите номер телефона</IonLabel>
                        <IonInput className='input' type="tel" placeholder="888-888-8888"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel className='label-inputs' position="stacked">Password input</IonLabel>
                        <IonInput className='input' type="password" value="password"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton className='btn'>Продолжить</IonButton>
                <IonButton color="light" className='btn'>Создать аккаунт</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;